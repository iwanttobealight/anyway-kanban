import { CardStatus } from "../enums";

export interface CardI {
  id: string
  title: string
  status: CardStatus
  price?: string
}