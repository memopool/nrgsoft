import { createSelectors, undox } from 'undox'

import {
  POST_REMOVE,
  POST_SAVE,
  POST_TOGGLE_LIKE,
  POSTS_GET_ERROR,
  POSTS_REORDER,
} from '../actions'
import {
  addArrayElement,
  moveArrayElement,
  removeArrayElement,
  updateArrayElement,
} from './utils'

const initState = []

const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case POSTS_GET_ERROR:
      console.error(action.error)
      return state

    case POST_SAVE:
      return addArrayElement(state, action)

    case POST_TOGGLE_LIKE:
      return updateArrayElement(state, action)

    case POST_REMOVE:
      return removeArrayElement(state, action)

    case POSTS_REORDER:
      return moveArrayElement(state, action)

    default:
      return state
  }
}

const undoablePostsReducer = undox(postsReducer)
export const selectors = createSelectors(postsReducer)

export default undoablePostsReducer
