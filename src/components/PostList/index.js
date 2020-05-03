import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components/macro'

import Post from './Post'

const PostList = ({ data }) => {
  const posts = data.map(item => <Post key={item.id} post={item} />)

  if (posts.length) return <Container>{posts}</Container>
  else return null
}

PostList.propTypes = {
  data: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  data: state.posts,
})

export default connect(mapStateToProps)(PostList)

const Container = styled.section`
  border: 1px solid ${props => props.theme.highlight.weak};
  border-radius: 5px;
  margin: 10px 0 20px;
`
