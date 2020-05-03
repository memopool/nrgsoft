import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createLogger } from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

const persistConfig = {
  key: 'posts',
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const logger = createLogger({ collapsed: true })
const sagaMiddleware = createSagaMiddleware()

const middlewares = applyMiddleware(sagaMiddleware, logger)

const store = createStore(persistedReducer, composeWithDevTools(middlewares))
const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { persistor, store }
