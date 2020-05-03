import SkipNext from '@vkontakte/icons/dist/28/skip_next'
import SkipPrevious from '@vkontakte/icons/dist/28/skip_previous'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import styled from 'styled-components/macro'

import { Container as ButtonContainer } from '../PostList/Post/Button'

const UndoRedoBox = ({ canUndo, canRedo, onUndo, onRedo }) => {
  return (
    <Container>
      <Button onClick={onUndo} disabled={!canUndo}>
        <SkipPrevious />
      </Button>
      <Button onClick={onRedo} disabled={!canRedo}>
        <SkipNext />
      </Button>
    </Container>
  )
}

UndoRedoBox.propTypes = {
  canUndo: PropTypes.bool.isRequired,
  canRedo: PropTypes.bool.isRequired,
  onUndo: PropTypes.func.isRequired,
  onRedo: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  canUndo: state.posts.past.length > 0,
  canRedo: state.posts.future.length > 0,
})

const mapDispatchToProps = dispatch => ({
  onUndo: () => dispatch(UndoActionCreators.undo()),
  onRedo: () => dispatch(UndoActionCreators.redo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedoBox)

const Container = styled.section`
  background-color: ${props => props.theme.highlight.invisible};
  border-radius: 5px;
  box-shadow: 0 0 0 1px ${props => props.theme.highlight.weak};
  display: flex;
  margin: 10px 0;
  padding: 10px;
`
const Button = styled(ButtonContainer)`
  color: ${({ theme, disabled }) =>
    disabled ? theme.default.semivisible : theme.default.medium};
  cursor: ${props => (props.disabled ? 'unset' : 'pointer')};

  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? 'unset' : theme.highlight.weak};
  }

  &:active {
    background-color: ${({ theme, disabled }) =>
      disabled ? 'unset' : theme.highlight.medium};
  }
`
