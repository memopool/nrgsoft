import React from 'react'
import styled from 'styled-components/macro'

import { subreddits } from '../../config/data'
import Ticker from './Ticker'
import TickerLine from './TickerLine'

const TickerList = () => {
  const lines = subreddits.map(item => (
    <TickerLine key={item.id}>
      <Ticker subject={item.link} />
    </TickerLine>
  ))

  return <Container>{lines}</Container>
}

export default TickerList

const Container = styled.section`
  background-color: ${props => props.theme.highlight.invisible};
  border-radius: 5px;
  box-shadow: 0 0 0 1px ${props => props.theme.highlight.weak};
  margin: 20px 0 10px;
  padding: 5px 0;
`
