import IconRemove from '@vkontakte/icons/dist/28/delete_outline'
import Favorite from '@vkontakte/icons/dist/28/favorite'
import FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'

import { removePost, toggleLike } from '../../../store/actions'
import Button from './Button'
import Link from './Link'

const Post = ({ post, toggleLike, removePost }) => {
  const handleLike = () => toggleLike(post.id)
  const handleRemove = () => removePost(post.id)

  return (
    <Container>
      <Button onClick={handleLike}>
        {post.isLiked ? (
          <Favorite width={24} height={24} />
        ) : (
          <FavoriteOutline width={24} height={24} />
        )}
      </Button>
      <Button onClick={handleRemove}>
        <IconRemove width={24} height={24} />
      </Button>
      <Link title={post.title} permalink={post.permalink}></Link>
    </Container>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  toggleLike: PropTypes.func.isRequired,
  removePost: PropTypes.func.isRequired,
}

const mapDispatchToProps = { toggleLike, removePost }

export default connect(null, mapDispatchToProps)(Post)

const Container = styled.article`
  box-sizing: border-box;
  display: flex;
  font-size: 16px;
  height: 60px;
  padding: 10px;
  width: 100%;
  &:hover {
    background-color: ${props => props.theme.highlight.weak};
  }
`
