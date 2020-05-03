import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import styled, { keyframes } from 'styled-components/macro'

import { getPosts } from '../../store/actions'

const Ticker = ({ subject, getPosts }) => {
  return (
    <Wrapper>
      <Button onClick={() => getPosts(subject)}>{subject}</Button>
    </Wrapper>
  )
}

Ticker.propTypes = {
  subject: PropTypes.string.isRequired,
  getPosts: PropTypes.func.isRequired,
}

const mapDispatchToProps = { getPosts }

export default connect(null, mapDispatchToProps)(Ticker)

const TICKER_WIDTH = '160px'

const crawling = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(100% - ${TICKER_WIDTH}));
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
  width: ${TICKER_WIDTH};
  &:hover {
    background-color: ${props => props.theme.highlight.medium};
  }
  &:active {
    background-color: ${props => props.theme.highlight.strong};
  }
`

const Wrapper = styled.div`
  animation: 5s ${crawling} ease-in-out infinite alternate;
  pointer-events: none;
  &:hover {
    animation-play-state: paused;
  }
  & > ${Button} {
    pointer-events: auto;
  }
`
