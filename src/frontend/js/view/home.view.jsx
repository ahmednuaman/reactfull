import { Col, Grid, Row } from 'react-bootstrap'
import { head } from 'lodash'
import { saveWorkbook } from 'reduxstore/action/index.action'

import console from 'console'
import FileDropzone from 'component/file-dropzone/file-dropzone.component'
import React from 'react'
import XLSX from 'xlsx'

const onFiles = (files) => {
  const file = head(files)
  const reader = new window.FileReader()

  reader.onload = (event) => {
    const workbook = XLSX.read(event.target.result, {
      type: 'binary',
      cellStyles: true
    })

    console.log(workbook)
    saveWorkbook(workbook)
  }

  reader.readAsBinaryString(file)
}

export default () =>
  <Grid>
    <Row>
      <Col xs={12}>
        <FileDropzone accept='*' multiple={false} onFiles={onFiles}>
          <h3>Drop an Excel file here</h3>
          <small>Or click to select a file instead.</small>
        </FileDropzone>
      </Col>
    </Row>
  </Grid>
