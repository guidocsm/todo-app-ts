import { TODO_FILTERS } from "./helpers/consts"

export interface Todo {
  id: number,
  title: string,
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>
export type TodoHandleComplete = Pick<TodoType, 'id' | 'completed'>

export type ListOfTodos = Todo[]

export type FiltersValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]