import * as actionTypes from "./constants"
import { Todo } from "../../components/todos/types"

export const todoContextActions = (dispatch: any) => {
    return {
        add: (todo: Todo) => {
            dispatch({type: actionTypes.ADD_TODO, payload: todo})
        },
        changeStatus: (id: string) => {
            dispatch({type: actionTypes.CHANGE_STATUS_TODO, payload: id})
        },
        removeTodo: (id: string) => {
            dispatch({type: actionTypes.REMOVE_TODO, payload: id})
        },
        edit: (id: string, title: string) => {
            dispatch({type: actionTypes.EDIT_TODO, payload: {id,title}})
        }
    }
}

