import { STORAGE_KEY } from '../../config/data'
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
  saveToLocalStorage,
  updateArrayElement,
} from './utils'

const initPosts = []
const storedPosts = localStorage.getItem(STORAGE_KEY)
const initState = JSON.parse(storedPosts) || initPosts

const postsReducer = (state = initState, action) => {
  switch (action.type) {
    // proper error handler is expected to be here
    // also the loading handler
    case POSTS_GET_ERROR: {
      console.error(action.error)
      return state
    }

    case POST_SAVE: {
      const newState = addArrayElement(state, action)
      saveToLocalStorage(newState)
      return newState
    }

    case POST_TOGGLE_LIKE: {
      const newState = updateArrayElement(state, action)
      saveToLocalStorage(newState)
      return newState
    }

    case POST_REMOVE: {
      const newState = removeArrayElement(state, action)
      saveToLocalStorage(newState)
      return newState
    }

const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case SAVE_POST:
      saveToLocalStorage([...state, action.payload])
      return [...state, action.payload]

    default:
      return state
  }
}

export default postsReducer
