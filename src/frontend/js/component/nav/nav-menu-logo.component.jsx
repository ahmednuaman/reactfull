import { Link } from 'react-router'
import { Nav, Navbar } from 'react-bootstrap'

import React from 'react'

export default () =>
  <Nav pullRight>
    <Navbar.Brand>
      <Link to={'/'}>
        Cool Corp
      </Link>
    </Navbar.Brand>
  </Nav>
