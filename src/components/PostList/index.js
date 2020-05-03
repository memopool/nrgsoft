import PropTypes from 'prop-types'
import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'

import { reorderPosts } from '../../store/actions'
import List from './Draggable/List'
import Row, { Item } from './Draggable/Row'

const PostList = ({ items, reorderPosts }) => {
  const onDragEnd = result => {
    if (!result.destination) return
    if (result.source.index === result.destination.index) return

    reorderPosts({
      startIndex: result.source.index,
      endIndex: result.destination.index,
    })
  }

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="droppable"
          mode="virtual"
          renderClone={(provided, snapshot, rubric) => (
            <Item item={items[rubric.source.index]} provided={provided} />
          )}
        >
          {droppableProvided => (
            <List items={items} ref={droppableProvided.innerRef}>
              {Row}
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  )
}

PostList.propTypes = {
  items: PropTypes.array.isRequired,
  reorderPosts: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  items: state.posts.present,
})

const mapDispatchToProps = { reorderPosts }

export default connect(mapStateToProps, mapDispatchToProps)(PostList)

const Container = styled.section`
  background-color: ${props => props.theme.highlight.invisible};
  border-radius: 5px;
  box-shadow: 0 0 0 1px ${props => props.theme.highlight.weak};
  height: 100%;
  margin: 10px 0 20px;
`
