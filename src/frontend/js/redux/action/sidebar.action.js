import genericAction from './generic.action'

export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'
export const OPEN_SIDEBAR = 'OPEN_SIDEBAR'
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

export const closeSidebarAction = genericAction(CLOSE_SIDEBAR)
export const openSidebarAction = genericAction(OPEN_SIDEBAR)
export const toggleSidebarAction = genericAction(TOGGLE_SIDEBAR)
