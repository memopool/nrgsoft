export const POSTS_GET = 'POSTS_GET'
export const POSTS_GET_ERROR = 'POSTS_GET_ERROR'
export const POST_SAVE = 'POST_SAVE'
export const POST_TOGGLE_LIKE = 'POST_TOGGLE_LIKE'
export const POST_REMOVE = 'POST_REMOVE'
export const POSTS_REORDER = 'POSTS_REORDER'

export function getPosts(url) {
  return { type: POSTS_GET, url }
}

export function savePost(post) {
  return { type: POST_SAVE, post }
}

export function toggleLike(id) {
  return { type: POST_TOGGLE_LIKE, id }
}

export function removePost(id) {
  return { type: POST_REMOVE, id }
}

export function reorderPosts(indexes) {
  return { type: POSTS_REORDER, indexes }
}
