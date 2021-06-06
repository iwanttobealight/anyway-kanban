import { Dispatch, SetStateAction } from 'react';

import { CardDone } from './components/card-done';
import { CardI } from '../../interfaces';
import { CardInProgress } from './components/card-in-progress';
import { CardStatus } from '../../enums';
import { CardTodo } from './components/card-todo';
import { calculatePrice } from './utils/calculate-price';
import styles from './Card.module.css';

interface CardProps {
  card: CardI
  updateCards: Dispatch<SetStateAction<CardI[]>>
}

export const Card = ({ card, updateCards }: CardProps) => {
  const { id, title, status, price } = card

  const todoButtonHandler = () => {
    updateCards((prevState: CardI[]) => prevState.map(card => card.id !== id ? card : { ...card, status: CardStatus.InProgress }))
  }

  const inProgressButtonHandler = (counter: number) => {
    const price = calculatePrice(counter)

    updateCards((prevState: CardI[]) => prevState.map(card => card.id !== id ? card : { ...card, status: CardStatus.Done, price }))
  }
  
  return <div className={styles.card}>
    <h3 className={styles.title}>{title}</h3>
    {status === CardStatus.Todo && <CardTodo onClick={todoButtonHandler} />}
    {status === CardStatus.InProgress && <CardInProgress onClick={(counter: number) => inProgressButtonHandler(counter)} />}
    {status === CardStatus.Done && <CardDone price={price} />}
  </div>
}
