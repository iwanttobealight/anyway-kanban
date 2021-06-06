import { CardI, ListI } from "../interfaces"

import { CardStatus } from "../enums"

export const initialLists = [
  {
    order: '1',
    title: 'To do',
    status: CardStatus.Todo
  },
  {
    order: '2',
    title: 'In progress',
    status: CardStatus.InProgress
  },
  {
    order: '3',
    title: 'Done',
    status: CardStatus.Done
  }
] as ListI[]

export const initialCards = [
  {
    id: '1',
    title: 'Build a house',
    status: CardStatus.Todo
  },
  {
    id: '2',
    title: 'Plant a tree',
    status: CardStatus.Todo
  },
  {
    id: '3',
    title: 'Go to grocery',
    status: CardStatus.InProgress
  },
  {
    id: '4',
    title: 'Take out the trash',
    status: CardStatus.Done,
    price: '40'
  },
  {
    id: '5',
    title: 'Walk the dog',
    status: CardStatus.Done
  }
] as CardI[]