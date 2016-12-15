import { Button, Col, Glyphicon, Grid, PageHeader, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import lostGif from 'img/404'
import React from 'react'

export default () =>
  <Grid>
    <Row>
      <Col xs={12}>
        <PageHeader>
          Page not found
          <LinkContainer to={'/'}>
            <Button bsStyle='primary' className='pull-right'>
              <Glyphicon glyph='home' />
            </Button>
          </LinkContainer>
        </PageHeader>
        <img src={lostGif} style={{
          width: '100%'
        }} />
      </Col>
    </Row>
  </Grid>
