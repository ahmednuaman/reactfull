import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import sidebarReducer from './sidebar.reducer'
import updateReducer from './update.reducer'

export default combineReducers({
  routing: routerReducer,
  sidebar: sidebarReducer,
  workbook: updateReducer
})
