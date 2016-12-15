import { flow, map, omit, toPairs } from 'lodash/fp'
import { isString, kebabCase } from 'lodash'
import { Nav, NavDropdown, NavItem } from 'react-bootstrap'

import MenuItem from './menu-item.component'
import React from 'react'

const MenuItems = ({ dropdown, header, id, items, prefix, title }) => {
  const elements = flow([
    omit('title'),
    toPairs,
    map(([ id, item ]) => {
      const key = kebabCase(id)

      if (isString(item)) {
        return (
          <MenuItem dropdown={dropdown} key={key} link={`${prefix || ''}${id}`} title={item} />
        )
      } else {
        return (
          <MenuItems dropdown id={id} items={item} key={key} prefix={id} title={item.title} />
        )
      }
    })
  ])(items)

  if (header) {
    elements.unshift(
      <NavItem key={elements.length}>{header}</NavItem>
    )
  }

  return (
    dropdown
    ? <NavDropdown id={kebabCase(`${id}${title}`)} title={title}>{elements}</NavDropdown>
    : <Nav bsStyle='pills' stacked>{elements}</Nav>
  )
}

export default MenuItems
