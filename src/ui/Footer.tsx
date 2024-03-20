import { Filters } from "../components/Filters"
import { type ListOfTodos, type FiltersValue } from "../types"

interface Props {
  todos: ListOfTodos
  activeCount: number,
  completedCount: number,
  selectedFilter: FiltersValue,
  onClearCompleted: () => void,
  handleFilterChange: (filter: FiltersValue) => void
}

export function Footer({ todos, activeCount = 0, completedCount = 0, selectedFilter, onClearCompleted, handleFilterChange }: Props): JSX.Element {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount} pending tasks</strong>
      </span>
      {todos.length > 0 &&
        <Filters
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
          completedTodos={todos.filter(todo => todo.completed)}
          activeTodos={todos.filter(todo => !todo.completed)}
        />
      }
      {completedCount > 0 &&
        <button 
          onClick={onClearCompleted} 
          className="clear-completed"
        >
          Clear completed
        </button>
      }
    </footer>
  )
}