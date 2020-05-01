import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'

const TickerLine = ({ children }) => {
  return <Container>{children}</Container>
}

TickerLine.propTypes = {
  children: PropTypes.element.isRequired,
}

export default TickerLine

const Container = styled.div`
  padding: 5px 10px;
`
