import { Button } from 'react-bootstrap'

interface CardTodoProps {
  onClick: () => void
}

export const CardTodo = ({ onClick }: CardTodoProps) => {
  return <Button onClick={onClick} size="sm">Start</Button>
}