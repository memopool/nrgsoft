import { all } from 'redux-saga/effects'

import postsWatcherSaga from './posts'

export default function* rootSaga() {
  yield all([postsWatcherSaga()])
}
