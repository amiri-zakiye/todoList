import { Todos } from "../../components/todos/types"

export type TodoContextType = (TodosContextState | (() => void))[]

export type TodosContextState = {
    todos: Todos
}

export type TodoContextAction = {
    type: "ADD_TODO" | "REMOVE_TODO" | "CHANGE_STATUS_TODO" | "EDIT_TODO",
    payload: any
}

export type TodoReducer = (state: TodosContextState,action: TodoContextAction) => TodosContextState
