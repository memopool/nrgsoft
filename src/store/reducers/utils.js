import { STORAGE_KEY } from '../../config/data'

export const saveToLocalStorage = data =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))

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
