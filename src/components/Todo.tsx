import { TodoHandleComplete, TodoId, type Todo as TodoType } from "../types"

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToogleCompleteTodo: ({ id, completed }: TodoHandleComplete) => void
}

export function Todo({ id, title, completed, onRemoveTodo, onToogleCompleteTodo }: Props) {
  const handleChangeChexbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToogleCompleteTodo({ id, completed: event.target.checked })
  }

  return (
    <>
      <input 
        type="checkbox" 
        className="toggle"
        checked={completed} 
        onChange={handleChangeChexbox}
        style={{cursor: 'pointer'}}
      />
      <label>{title}</label>
      <button 
        className="destroy" 
        onClick={() => onRemoveTodo({ id })}
        style={{cursor: 'pointer'}}
      />
    </>
  )
}