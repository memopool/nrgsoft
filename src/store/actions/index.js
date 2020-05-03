export const POSTS_GET = 'POSTS_GET'
export const POST_SAVE = 'POST_SAVE'
export const POST_TOGGLE_LIKE = 'POST_TOGGLE_LIKE'
export const POST_REMOVE = 'POST_REMOVE'

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
