import React from 'react'
import { hot } from 'react-hot-loader/root'
import styled, {
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components/macro'

import PostList from './components/PostList'
import TickerList from './components/TickerList'
import theme from './config/theme'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main>
          <TickerList />
          <PostList />
        </Main>
      </ThemeProvider>
    </>
  )
}

const AppRoot = process.env.NODE_ENV === 'development' ? hot(App) : App

export default AppRoot

const Main = styled.main`
  padding: 0 20px;
`

const GlobalStyle = createGlobalStyle`
  html {
    overflow: hidden;
  }
  body {
    background-color: ${props => props.theme.global.background};
    color: ${props => props.theme.global.text};
    font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    margin: 0;
  }
`
