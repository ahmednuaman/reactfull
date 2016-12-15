import { LineChart } from 'react-d3-basic'

import d3 from 'd3'
import React from 'react'

const chartData = ''
const width = 500
const height = 300
const margins = { left: 100, right: 100, top: 50, bottom: 50 }
const chartSeries = [{
  field: 'total',
  name: 'Total',
  color: '#ff7f0e'
}]
const x = (d) => d3.time.format('%YM%m').parse(d.month)
const xScale = 'time'

export default () =>
  <LineChart
    margins={margins}
    data={chartData}
    width={width}
    height={height}
    chartSeries={chartSeries}
    x={x}
    xScale={xScale}
  />
