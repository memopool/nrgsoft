import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'

const Button = ({ children, isLiked, onClick }) => (
  <Container onClick={onClick} isLiked={isLiked || null}>
    {children}
  </Container>
)

Button.propTypes = {
  children: PropTypes.element.isRequired,
  isLiked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

export default Button

const Container = styled.section`
  align-items: center;
  border-radius: 5px;
  color: ${props => props.theme.default.medium};
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  margin-right: 5px;
  min-width: 40px;
  transition: background-color 0.15s ease-in-out;
  user-select: none;
  width: 40px;
  &:hover {
    background-color: ${props => props.theme.highlight.medium};
  }
  &:active {
    background-color: ${props => props.theme.highlight.strong};
  }
`
