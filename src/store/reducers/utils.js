export const addArrayElement = (state, payload) => [...state, payload.post]

const toggleLike = (element, targetId) =>
  element.id === targetId ? { ...element, isLiked: !element.isLiked } : element

export const updateArrayElement = (state, payload) =>
  state.map(element => toggleLike(element, payload.id))

export const removeArrayElement = (state, payload) =>
  state.filter(element => element.id !== payload.id)

export const moveArrayElement = (state, payload) => {
  const { startIndex, endIndex } = payload.indexes

  const newState = Array.from(state)
  const [movedElement] = newState.splice(startIndex, 1)
  newState.splice(endIndex, 0, movedElement)

  return newState
}
