import React from 'react'
import { Statistic, Grid } from 'semantic-ui-react'

const StatisticExampleTopLabel = () => (
    <Grid textAlign='center' style={{ height: '10vh' }} verticalAlign='middle'>
  <Statistic>
    <Statistic.Label>Views</Statistic.Label>
    <Statistic.Value>40,509</Statistic.Value>
  </Statistic>
  </Grid>

)

export default StatisticExampleTopLabel
