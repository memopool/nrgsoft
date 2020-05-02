export const GET_POSTS = 'GET_POSTS'
export const SAVE_POST = 'SAVE_POST'

export function getPosts(url) {
  return { type: GET_POSTS, url }
}

export function savePost(post) {
  return { type: SAVE_POST, post }
}
