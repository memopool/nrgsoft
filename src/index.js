import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import * as serviceWorker from './serviceWorker'
import { persistor, store } from './store'

render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()

if (process.env.NODE_ENV === 'development') {
  window['__react-beautiful-dnd-disable-dev-warnings'] = true
}
