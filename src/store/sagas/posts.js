import { nanoid } from 'nanoid'
import { call, put, takeEvery } from 'redux-saga/effects'

import { getPosts as get } from '../../services/API'
import { POST_SAVE, POSTS_GET, POSTS_GET_ERROR } from '../actions'

const getRandomPost = posts => {
  const index = Math.floor(Math.random() * posts.length)
  return posts[index].data
}

function* getPosts(action) {
  try {
    const posts = yield call(get, action.url)
    const randomPost = getRandomPost(posts)

    const { permalink, title } = randomPost
    const post = {
      isLiked: false,
      id: nanoid(),
      permalink,
      title,
    }

    yield put({ type: POST_SAVE, post })
  } catch (error) {
    yield put({ type: POSTS_GET_ERROR, error: error.message })
  }
}

export default function* postsWatcherSaga() {
  yield takeEvery(POSTS_GET, getPosts)
}
