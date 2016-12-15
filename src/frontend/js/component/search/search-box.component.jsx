import { Button, Form, FormControl, FormGroup, Glyphicon, InputGroup } from 'react-bootstrap'

import React from 'react'

export default () =>
  <Form inline>
    <FormGroup>
      <InputGroup>
        <FormControl type='text' placeholder='Search...' />
        <InputGroup.Button>
          <Button type='submit' bsStyle='link'>
            <Glyphicon glyph='search' />
          </Button>
        </InputGroup.Button>
      </InputGroup>
    </FormGroup>
  </Form>
