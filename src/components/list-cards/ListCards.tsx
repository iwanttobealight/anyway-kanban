import { Button, Col } from 'react-bootstrap'
import { Dispatch, SetStateAction } from 'react';

import { Card } from '../card';
import { CardI } from '../../interfaces';
import { CardStatus } from '../../enums';
import styles from './ListCards.module.css';

interface ListCardsProps {
  title: string
  status: CardStatus
  cards: CardI[]
  updateCards: Dispatch<SetStateAction<CardI[]>>
  addNewCard: () => void
}

export const ListCards = ({ title, cards, status, updateCards, addNewCard }: ListCardsProps) => {
  return <Col className={styles.list}>
    <header className={styles.header}>
      <div className={styles.cardsCount}>{cards.length}</div>
      <h2 className={styles.title}>{title}</h2>
    </header>
    {cards.map((card: CardI) => <Card key={card.title} card={card} updateCards={updateCards} />)}
    {status === CardStatus.Todo && <Button onClick={addNewCard} className={styles.button} variant="outline-secondary">+ New task</Button>}
  </Col>
}