import { CardI } from "../interfaces";
import { CardStatus } from "../enums";
import { getRandomString } from "../utils/get-random-string";

export const generateNewCard = (): CardI => {
  const id = getRandomString()
  
  return {
    id,
    title: id,
    status: CardStatus.Todo
  }
}