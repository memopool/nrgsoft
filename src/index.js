import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components/macro'

import App from './App'
import theme from './config/theme'
import { persistor, store } from './store'

const AppRoot = process.env.NODE_ENV === 'development' ? hot(App) : App

render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <AppRoot />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)

if (process.env.NODE_ENV === 'development') {
  window['__react-beautiful-dnd-disable-dev-warnings'] = true
}
