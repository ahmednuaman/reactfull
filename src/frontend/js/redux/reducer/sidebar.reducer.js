import { CLOSE_SIDEBAR, OPEN_SIDEBAR, TOGGLE_SIDEBAR } from '../action/sidebar.action'

export default (open = false, { type }) => {
  switch (type) {
    case TOGGLE_SIDEBAR:
      return !open

    case CLOSE_SIDEBAR:
      return false

    case OPEN_SIDEBAR:
      return true
  }

  return open
}
