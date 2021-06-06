import { Button } from 'react-bootstrap'
import { Fragment } from 'react'
import { Info } from '../info'
import { useTimer } from './use-timer'

interface CardInProgressProps {
  onClick: (counter: number) => void
}

export const CardInProgress = ({ onClick }: CardInProgressProps) => {
  const { counter, second, minute, hour } = useTimer()

  return <Fragment>
    <Button onClick={() => onClick(counter)} variant="success" size="sm">Resolve</Button>
    <Info>{hour}:{minute}:{second}</Info>
  </Fragment>
}