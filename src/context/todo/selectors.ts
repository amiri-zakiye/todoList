import { Todos } from "../../components/todos/types"

export const todoContextSelectors = (state: any) : Todos => {
    return  state.todos
}