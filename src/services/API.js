import { API_ROOT, CACHE_TIMEOUT } from '../config/api'

const getUrl = query => `${API_ROOT}${query}.json`

const getData = (query, timeout) => {
  const url = getUrl(query)

  return fetch(url, { timeout })
    .then(response => {
      response
        .clone()
        .text()
        .then(content => {
          sessionStorage.setItem(query, content)
          sessionStorage.setItem(query + ':ts', Date.now())
        })

      return response
    })
    .then(response => response.json())
    .then(data => data.data.children)
}

export const cachedRequest = (query, timeout = CACHE_TIMEOUT) => {
  const cached = sessionStorage.getItem(query)
  const whenCached = sessionStorage.getItem(query + ':ts')

  if (cached !== null && whenCached !== null) {
    const age = (Date.now() - whenCached) / 1000

    if (age < timeout) {
      const response = JSON.parse(cached)
      return Promise.resolve(response.data.children)
    } else {
      sessionStorage.removeItem(query)
      sessionStorage.removeItem(query + ':ts')
    }
  }

  return getData(query, timeout)
}
