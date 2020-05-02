import { SAVE_POST } from '../actions'

const initPosts = []
const storedPosts = localStorage.getItem('redditPosts')
const initState = JSON.parse(storedPosts) || initPosts

const saveToLocalStorage = data => {
  localStorage.setItem('redditPosts', JSON.stringify(data))
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
