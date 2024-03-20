import { type TodoTitle, type FiltersValue, type TodoHandleComplete, type TodoId, type ListOfTodos } from './types'
import { mockTodos } from './mocks/mockTodo'
import { useEffect, useState } from 'react'
import { Todos } from './components/Todos'
import { TODO_FILTERS } from './helpers/consts'
import { Footer } from './ui/Footer'
import { Header } from './ui/Header'

import 'todomvc-app-css/index.css'

function App(): JSX.Element {
  const [todos, setTodos] = useState<ListOfTodos>([])
  const [selectedFilter, setSelectedFilter] = useState<FiltersValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const filteredTodos = todos.filter(todo => todo.id !== id)
    const completedTodos = filteredTodos.filter(todo => todo.completed)
    const activesTodos = filteredTodos.filter(todo => !todo.completed)
    
    setTodos(filteredTodos)
    if (completedTodos.length === 0 || activesTodos.length === 0) setSelectedFilter('all')

    localStorage.setItem('todos', JSON.stringify(filteredTodos))
  }
  
  const handleCompleted = ({ id, completed }: TodoHandleComplete): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })

    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const handleFilterChange = (filter: FiltersValue): void => {
    setSelectedFilter(filter)
  }

  const filteredTodos = todos.filter(todo => {
    if (selectedFilter === TODO_FILTERS.ACTIVE) return !todo.completed
    if (selectedFilter === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleRemoveAllCompleted = (): void => {
    const filteredTodos = todos.filter(todo => !todo.completed)
    setTodos(filteredTodos)
    if (selectedFilter === 'completed') {
      setSelectedFilter('all')
    }
    localStorage.setItem('todos', JSON.stringify(filteredTodos))
  }

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const ids = todos.map(todo => todo.id)
    const newTodo = {
      id: Math.max(...ids) + 1,
      title,
      completed: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const activeCount = todos.filter(todo => !todo.completed).length

  useEffect(() => {
    const TODOS_LS: string|null = localStorage.getItem('todos')
    
    if (TODOS_LS !== null) {
      setTodos(JSON.parse(TODOS_LS))
    } else {
      localStorage.setItem('todos', JSON.stringify(mockTodos))
    }
  }, [])

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos 
        todos={filteredTodos} 
        onRemoveTodo={handleRemove}
        onToogleCompleteTodo={handleCompleted}
      />
      <Footer
        todos={todos}
        activeCount={activeCount}
        completedCount={todos.length - activeCount}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleRemoveAllCompleted}
        selectedFilter={selectedFilter}
      />
    </div>
  )
}

export default App
