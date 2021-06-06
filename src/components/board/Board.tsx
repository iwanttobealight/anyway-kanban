import { CardI, ListI } from '../../interfaces';
import { Dispatch, SetStateAction } from 'react';

import { ListCards } from '../list-cards'
import { Row } from 'react-bootstrap'
import styles from './Board.module.css';

interface BoardProps {
  lists: ListI[]
  cards: CardI[]
  updateCards: Dispatch<SetStateAction<CardI[]>>
  addNewCard: () => void
}

export const Board = ({ lists, cards, updateCards, addNewCard }: BoardProps) => {
  return lists?.length <= 0 ? null :
    <Row className={styles.board}>
      {lists.map(({ status, title }) =>
        <ListCards
          key={title}
          title={title}
          status={status}
          cards={cards.filter((card: CardI) => card.status === status)}
          updateCards={updateCards}
          addNewCard={addNewCard}
          />
      )}
    </Row>
}