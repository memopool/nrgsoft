import React from 'react'
import styled from 'styled-components/macro'

import { subreddits } from '../../config/data'
import Ticker from './Ticker'
import TickerLine from './TickerLine'

const TickerList = () => {
  const lines = subreddits.map(item => (
    <TickerLine key={item.id}>
      <Ticker data={item} />
    </TickerLine>
  ))

  return <Container>{lines}</Container>
}

export default TickerList

const Container = styled.section`
  border: 1px solid rgba(220, 180, 140, 0.4);
  border-radius: 5px;
  margin: 20px 0;
  padding: 5px 0;
`
