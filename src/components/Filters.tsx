import {FILTERS_BUTTONS } from "../helpers/consts"
import { type ListOfTodos, type FiltersValue } from "../types"

interface Props {
  onFilterChange: (filter: FiltersValue) => void
  selectedFilter: FiltersValue
  completedTodos: ListOfTodos
  activeTodos: ListOfTodos
}

export function Filters({ activeTodos, completedTodos, selectedFilter, onFilterChange}: Props): JSX.Element {
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === selectedFilter
        const className = isSelected ? 'selected' : ''

        if (completedTodos.length === 0 && key === 'completed') return
        if (activeTodos.length === 0 && key === 'active') return
        
        return (
          <li key={key}>
            <a 
              href={href}
              className={className}
              onClick={(e) => {
                e.preventDefault()
                onFilterChange(key as FiltersValue)
              }}
            >
              {literal}
            </a>
          </li>
        )
      })}
      <li></li>
    </ul>
  )
}