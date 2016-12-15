import { Col, Navbar, Row } from 'react-bootstrap'

import NavMenuHamburger from './nav-menu-hamburger.component'
import NavMenuLogo from './nav-menu-logo.component'
import React from 'react'

export default () =>
  <Navbar fluid inverse>
    <Row>
      <Col xs={6}>
        <NavMenuHamburger />
      </Col>
      <Col xs={6}>
        <NavMenuLogo />
      </Col>
    </Row>
  </Navbar>
