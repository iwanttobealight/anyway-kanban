import * as api from './api'

import { CardI, ListI } from './interfaces'
import { useEffect, useState } from 'react'

import { Board } from './components/board'
import { Container } from 'react-bootstrap'
import { Header } from './components/header'
import styles from './App.module.css'

function App() {
  const [cards, setCards] = useState<CardI[]>([])
  const [lists, setLists] = useState<ListI[]>([])

  useEffect(() => {
    Promise.all([
      api.getAllCards(),
      api.getAllLists()
    ])
      .then(([cards, lists]) => {
        setCards(cards)
        setLists(lists)
      })

  }, [])

  const addNewCard = () => {
    api.getNewCard().then(newCard => setCards(prevCards => [...prevCards, newCard]))
  }

  return (
    <Container className={styles.container} >
      <Header />
      <Board cards={cards} lists={lists} updateCards={setCards} addNewCard={addNewCard} />
    </Container>
  );
}

export default App;
