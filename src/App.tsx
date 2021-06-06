import { useEffect, useState } from 'react'

import { Board } from './components/board'
import { CardI } from './interfaces'
import { CardStatus } from './enums'
import { Container } from 'react-bootstrap'
import { Header } from './components/header'
import styles from './App.module.css'

const initialLists = [
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
]

const initialCards = [
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

function App() {
  const [cards, setCards] = useState<CardI[]>(initialCards)

  useEffect(() => {
    // todo: download cards
  }, [])

  return (
    <Container className={styles.container} >
      <Header />
      <Board cards={cards} lists={initialLists} updateCards={setCards} />
    </Container>
  );
}

export default App;
