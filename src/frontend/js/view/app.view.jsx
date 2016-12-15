import { closeSidebar } from 'reduxstore/action/index.action'
import { Grid } from 'react-bootstrap'

import autobind from 'autobind-decorator'
import Menu from 'component/menu/menu.component'
import menuItems from 'data/menu'
import Nav from 'component/nav/nav.component'
import React from 'react'
import SearchBox from 'component/search/search-box.component'
import Sidebar from 'react-sidebar'
import store from 'reduxstore/store'

const sidebarContents = (
  <Menu items={menuItems} header={<SearchBox />} />
)

@autobind
class App extends React.Component {
  state = {
    sidebarOpen: true
  }

  componentDidMount () {
    store.subscribe(() => {
      const state = store.getState()

      this.setSideBar(state.sidebar)
    })
  }

  setSideBar (sidebarOpen) {
    this.setState({ sidebarOpen })
  }

  render () {
    return (
      <Sidebar sidebar={sidebarContents} docked={this.state.sidebarOpen} onClick={closeSidebar}>
        <Nav />
        <Grid fluid>
          {this.props.children}
        </Grid>
      </Sidebar>
    )
  }
}

export default App
