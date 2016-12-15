import { closeSidebarAction, openSidebarAction, toggleSidebarAction } from './sidebar.action'
import { saveWorkbookAction } from './workbook.action'

import store from '../store'

export const closeSidebar = closeSidebarAction(store)
export const openSidebar = openSidebarAction(store)
export const saveWorkbook = saveWorkbookAction(store)
export const toggleSidebar = toggleSidebarAction(store)
