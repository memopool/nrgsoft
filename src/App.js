import React from 'react'
import styled, { createGlobalStyle } from 'styled-components/macro'

import PostList from './components/PostList'
import TickerList from './components/TickerList'
import UndoRedoBox from './components/UndoRedoBox'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <TickerList />
        <UndoRedoBox />
        <PostList />
      </Main>
    </>
  )
}

export default App

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
    background-color: ${props => props.theme.global.background};
    color: ${props => props.theme.global.text};
    font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    margin: 0;
    max-width: 100%;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.highlight.weak};
    border-radius: 0 5px 5px 0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.default.invisible};
    border-radius: 0 5px 5px 0;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme.default.semivisible};
  }
`
