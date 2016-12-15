import { Link } from 'react-router'
import { Glyphicon, Nav, Navbar } from 'react-bootstrap'
import { toggleSidebar } from 'reduxstore/action/index.action'

import React from 'react'

export default () =>
  <Nav>
    <Navbar.Brand>
      <Link onClick={toggleSidebar}>
        <Glyphicon glyph='menu-hamburger' />
      </Link>
    </Navbar.Brand>
  </Nav>
