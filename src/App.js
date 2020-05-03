import React from 'react'
import { hot } from 'react-hot-loader/root'
import styled, {
  createGlobalStyle,
  ThemeProvider,
} from 'styled-components/macro'

import PostList from './components/PostList'
import TickerList from './components/TickerList'
import UndoRedoBox from './components/UndoRedoBox'
import theme from './config/theme'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main>
          <TickerList />
        <UndoRedoBox />
          <PostList />
        </Main>
      </ThemeProvider>
    </>
  )
}

const AppRoot = process.env.NODE_ENV === 'development' ? hot(App) : App

export default AppRoot

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
  max-width: 960px;
  padding: 0 20px;
`

const GlobalStyle = createGlobalStyle`
  html {
    max-width: 100%;
    overflow-x: hidden;
  }
  body {
    max-width: 100%;
    overflow-x: hidden;
    background-color: ${props => props.theme.global.background};
    color: ${props => props.theme.global.text};
    font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    margin: 0;
  }
`
