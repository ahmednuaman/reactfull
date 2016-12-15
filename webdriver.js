'use strict'

const BASE_URL = `http://localhost:${process.env.PORT}/`
const NOW = Date.now()
const SCREENSHOT_DIR = `./coverage/screenshot/${NOW}/`
const BREAKPOINTS = [480, 768, 960, 1142, 1600, 2000, 2500]
const HEIGHT = 1000
const TIMEOUT = 5000

const _ = require('lodash')
const async = require('async')
const fs = require('fs')
const mkdirp = require('mkdirp')
const path = require('path')
const selenium = require('selenium-standalone')
const webdriver = require('selenium-webdriver')
const by = webdriver.By

const screenshotDir = path.resolve(process.cwd(), SCREENSHOT_DIR)

selenium.start({}, (error, child) => {
  if (error) {
    console.log(error)
    return process.exit(1)
  }

  const driver = new webdriver.Builder()
                              .forBrowser('chrome')
                              .build()

  mkdirp.sync(screenshotDir)

  driver.get(BASE_URL)
  driver.findElements(by.css('a'))
        .then((links) => {
          async.mapSeries(links, (link, done) => {
            link.getAttribute('href')
                .then((url) => {
                  done(null, url)
                })
          }, (error, urls) => {
            if (error) {
              console.log(error)
              return process.exit(1)
            }

            async.eachSeries(urls, (url, done) => {
              const href = _.snakeCase(url)

              driver.manage().window().setPosition(0, 0)
              driver.get(url)
                    .then(() => {
                      driver.wait(TIMEOUT)
                            .then(() => {
                              async.eachSeries(BREAKPOINTS, (breakpoint, done) => {
                                driver.manage().window().setSize(breakpoint, HEIGHT)
                                driver.wait(() => {
                                  return driver.manage().window().getSize().then((size) => {
                                    return size.width === breakpoint
                                  })
                                }, TIMEOUT)
                                .then(() => {
                                  return driver.executeScript(
                                    `var body = document.body, 
                                         html = document.documentElement; 
                                    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)`
                                  )
                                })
                                .then((height) => {
                                  driver.manage().window().setSize(breakpoint, height)
                                  return driver.wait(() => {
                                    return driver.manage().window().getSize().then((size) => {
                                      return size.height === height
                                    })
                                  }, TIMEOUT)
                                })
                                .then(() => {
                                  driver.takeScreenshot()
                                        .then((data) => {
                                          let file = path.join(screenshotDir, `screenshot-${href}-${breakpoint}.png`)
                                          fs.writeFileSync(file, data.replace('data:image/png;base64,', ''), 'base64')
                                          done()
                                        })
                                })
                              }, done)
                            })
                    })
            }, (error) => {
              if (error) {
                console.log(error)
              }

              driver.quit()
              child.kill()
            })
          })
        })
})
