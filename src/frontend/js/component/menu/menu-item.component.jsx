import { kebabCase } from 'lodash'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import { MenuItem, NavItem } from 'react-bootstrap'

import React from 'react'

export default ({ link, title, dropdown }) => {
  const key = kebabCase(`${link}${title}`)
  const child =
    dropdown
    ? <MenuItem key={key}>{title}</MenuItem>
    : <NavItem key={key}>{title}</NavItem>

  return (
    link === '/'
    ? <IndexLinkContainer to={link}>{child}</IndexLinkContainer>
    : <LinkContainer to={link}>{child}</LinkContainer>
  )
}
