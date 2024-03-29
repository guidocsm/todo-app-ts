import { useState } from "react"
import { TodoTitle } from "../../types"

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

export function CreateTodo({ saveTodo }: Props): JSX.Element {
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (inputValue.length === 0) return
    
    saveTodo({ title: inputValue })
    setInputValue('')
  }

  return (
    <form onSubmit={handleKeyDown}>
      <input 
        type="text"
        className="new-todo"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={() => {}}
        placeholder="What do you what to do?"
        autoFocus
      />
    </form>
  )
}