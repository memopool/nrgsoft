import { nanoid } from 'nanoid'
import { call, put, takeEvery } from 'redux-saga/effects'

import { getPosts as get } from '../../services/API'
import { GET_POSTS, SAVE_POST } from '../actions'

const getRandomPost = posts => {
  const index = Math.floor(Math.random() * posts.length)
  return posts[index].data
}

function* getPosts(action) {
  try {
    const posts = yield call(get, action.url)
    const randomPost = getRandomPost(posts)

    const post = {
      isLiked: false,
      id: nanoid(),
      permalink: randomPost.permalink,
      title: randomPost.title,
    }

    yield put({ type: SAVE_POST, payload: post })
  } catch (error) {
    // put error handler action here
    console.log(error)
  }
}

export default function* postsWatcherSaga() {
  yield takeEvery(GET_POSTS, getPosts)
}
