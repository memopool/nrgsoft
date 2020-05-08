import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { areEqual } from 'react-window'

import Post from '../Post'

const getStyle = ({ provided, style, isDragging }) => {
  const combined = {
    ...style,
    ...provided.draggableProps.style,
    outline: 'none',
    margin: 0,
    borderRadius: '5px',
    boxShadow: isDragging ? '0 0 0 1px rgba(220, 180, 140, 0.4)' : 'none',
  }
  return combined
}

export const Item = ({ item, provided, style, isDragging }) => {
  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      style={getStyle({ provided, style, isDragging })}
    >
      <Post post={item} />
    </div>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  provided: PropTypes.object.isRequired,
  style: PropTypes.object,
  isDragging: PropTypes.bool,
}

const Row = memo(({ data, index, style }) => {
  const item = data[index]
  return (
    <Draggable draggableId={item.id} index={index} key={item.id}>
      {(provided, snapshot) => (
        <Item
          item={item}
          index={index}
          provided={provided}
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
