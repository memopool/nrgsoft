import React from 'react'
import styled from 'styled-components/macro'

import { posts as data } from '../../config/data'
import Post from './Post'

const PostList = () => {
  const posts = data.map(item => <Post key={item.id} data={item} />)

  return <Container>{posts}</Container>
}

export default PostList

const Container = styled.section`
  border: 1px solid ${props => props.theme.highlight.weak};
  border-radius: 5px;
  margin: 20px 0;
`
