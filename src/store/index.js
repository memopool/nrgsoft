import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

const logger = createLogger({ collapsed: true })
const sagaMiddleware = createSagaMiddleware()

const prodStore = createStore(rootReducer, applyMiddleware(sagaMiddleware))

const devStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware), applyMiddleware(logger))
)

sagaMiddleware.run(rootSaga)

const store = process.env.NODE_ENV === 'production' ? prodStore : devStore

export default store
