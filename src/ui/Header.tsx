import { CreateTodo } from "../components/todo/CreateTodo"
import { TodoTitle } from "../types"

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export function Header({ onAddTodo }: Props): JSX.Element {
  return (
    <header className="header">
      <h1>
        todo
        <img
          style={{width: '60px', height: 'auto'}}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
        />
      </h1>
      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}