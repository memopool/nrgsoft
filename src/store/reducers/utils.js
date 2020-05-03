export const addArrayElement = (state, payload) => [...state, payload.post]

export const updateArrayElement = (state, payload) => {
  const checkIfTarget = element => {
    if (element.id === payload.id) {
      return { ...element, isLiked: !element.isLiked }
    }

    return element
  }

  return [...state.map(element => checkIfTarget(element))]
}

export const removeArrayElement = (state, payload) => [
  ...state.filter(element => element.id !== payload.id),
]

export const moveArrayElement = (state, payload) => {
  const { startIndex, endIndex } = payload.indexes

  const newState = Array.from(state)
  const [movedElement] = newState.splice(startIndex, 1)
  newState.splice(endIndex, 0, movedElement)

  return newState
}
