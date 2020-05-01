import PropTypes from 'prop-types'
import React from 'react'
import styled, { keyframes } from 'styled-components/macro'

const Ticker = ({ data }) => {
  return (
    <Wrapper>
      <Button>{data.link}</Button>
    </Wrapper>
  )
}

Ticker.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Ticker

const crawling = tickerWidth => keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(calc(100% - ${tickerWidth}), 0, 0);
  }
`

const Button = styled.button`
  background-color: ${props => props.theme.highlight.weak};
  border: none;
  border-radius: 5px;
  color: ${props => props.theme.global.text};
  cursor: pointer;
  font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: 500;
  height: 40px;
  line-height: 40px;
  outline: none;
  overflow: hidden;
  padding: 0 20px;
  text-overflow: ellipsis;
  transition: background-color 0.15s ease-in-out;
  user-select: none;
  white-space: nowrap;
  width: ${props => props.theme.ticker.width};
  &:hover {
    background-color: ${props => props.theme.highlight.medium};
  }
  &:active {
    background-color: ${props => props.theme.highlight.strong};
  }
`

const Wrapper = styled.div`
  animation: 5s ${props => crawling(props.theme.ticker.width)} ease-in-out
    infinite alternate;
  pointer-events: none;
  &:hover {
    animation-play-state: paused;
  }
  & > ${Button} {
    pointer-events: auto;
  }
`
