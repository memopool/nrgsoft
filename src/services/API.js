export const getPosts = url =>
  fetch(`https://www.reddit.com/r/${url}.json`).then(response =>
    response.json().then(data => data.data.children)
  )
