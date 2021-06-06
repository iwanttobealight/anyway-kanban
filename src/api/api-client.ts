import { initialCards, initialLists } from "./mock-data"

import { generateNewCard } from "./generate-new-card"

export const getAllLists = () => {
  return Promise.resolve(initialLists)
}

export const getAllCards = () => {
  return Promise.resolve(initialCards)
}

export const getNewCard = () => {
  return Promise.resolve(generateNewCard())
}