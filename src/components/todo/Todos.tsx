import { TodoId, type ListOfTodos, TodoHandleComplete } from '../../types'
import { Todo } from './Todo'

interface Props {
  todos: ListOfTodos,
  onRemoveTodo: ({ id }: TodoId) => void,
  onToogleCompleteTodo: ({ id, completed }: TodoHandleComplete) => void
}


export function Todos({ todos, onRemoveTodo, onToogleCompleteTodo }: Props) {
  const listHeight = {
    maxHeight: 600,
    overflow: 'scroll'
  }

  return (
    <ul className="todo-list" style={listHeight}>
      {todos.map(todo => (
        <li key={todo.id} className={`${todo.completed} ? 'completed' : ''`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToogleCompleteTodo={onToogleCompleteTodo}
          />
        </li>
      ))}
    </ul>
  )
}