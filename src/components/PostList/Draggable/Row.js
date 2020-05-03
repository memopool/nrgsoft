import PropTypes from 'prop-types'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { areEqual } from 'react-window'

import Post from '../Post'

export const Item = ({ provided, style, item }) => {
  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      style={{
        outline: 'none',
        margin: 0,
        ...style,
        ...provided.draggableProps.style,
      }}
    >
      <Post post={item} />
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  provided: PropTypes.object.isRequired,
  style: PropTypes.object,
}

const Row = React.memo(({ data, index, style }) => {
  const item = data[index]
  return (
    <Draggable draggableId={item.id} index={index} key={item.id}>
      {(provided, snapshot) => (
        <Item
          item={item}
          index={index}
          provided={provided}
          isDragging={snapshot.isDragging}
          isGroupedOver={Boolean(snapshot.combineTargetFor)}
          style={style}
        />
      )}
    </Draggable>
  )
}, areEqual)

Row.propTypes = {
  data: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
}

Row.displayName = 'Row'

export default Row
