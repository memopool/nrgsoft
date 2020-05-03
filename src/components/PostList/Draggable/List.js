// AutoSizer wrapper is the reason of false postive console error
// 〝provided.innerRef has not been provided with a HTMLElement〞

import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList } from 'react-window'

const List = forwardRef(({ items, children }, ref) => {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <FixedSizeList
          height={height}
          width={width}
          itemCount={items.length}
          itemSize={60}
          outerRef={ref}
          itemData={items}
        >
          {children}
        </FixedSizeList>
      )}
    </AutoSizer>
  )
})

List.propTypes = {
  items: PropTypes.array.isRequired,
  children: PropTypes.elementType.isRequired,
}

List.displayName = 'List'

export default List
