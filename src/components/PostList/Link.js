import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'

const Link = ({ text }) => {
  return (
    <Conatiner>
      <Anchor href="google.com" target="_blank" rel="noopener noreferrer">
        {text}
      </Anchor>
    </Conatiner>
  )
}

Link.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Link

const Conatiner = styled.section`
  display: grid;
`

const Anchor = styled.a`
  align-items: center;
  border-radius: 5px;
  color: ${props => props.theme.global.text};
  display: inline-block;
  font-size: 17px;
  font-weight: 500;
  line-height: 40px;
  overflow: hidden;
  padding: 0 12px;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: background-color 0.15s ease-in-out;
  white-space: nowrap;
  &:hover {
    background-color: ${props => props.theme.highlight.medium};
  }
  &:active {
    background-color: ${props => props.theme.highlight.strong};
  }
`
