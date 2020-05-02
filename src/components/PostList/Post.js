import IconRemove from '@vkontakte/icons/dist/28/delete_outline'
import IconLike from '@vkontakte/icons/dist/28/like_outline'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'

import Button from './Button'
import Link from './Link'

const Post = ({ post }) => {
  return (
    <Container>
      <Button>
        <IconLike />
      </Button>
      <Button>
        <IconRemove />
      </Button>
      <Link title={post.title} permalink={post.permalink}></Link>
    </Container>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Post

const Container = styled.article`
  box-sizing: border-box;
  display: flex;
  font-size: 16px;
  height: 60px;
  padding: 10px;
  transition: background-color 0.15s ease-in-out;
  width: 100%;
  &:hover {
    background-color: ${props => props.theme.highlight.weak};
  }
`
