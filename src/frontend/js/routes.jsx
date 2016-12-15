import { browserHistory, IndexRoute, Router, Route } from 'react-router'
import { closeSidebar } from 'reduxstore/action/index.action'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import App from 'view/app.view'
import ErrorNotFound from 'view/error-not-found.view'
import Home from 'view/home.view'
import React from 'react'
import store from 'reduxstore/store'

const history = syncHistoryWithStore(browserHistory, store)

export default () =>
  <Provider store={store}>
    <Router history={history} onUpdate={closeSidebar}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='*' component={ErrorNotFound} />
      </Route>
    </Router>
  </Provider>
