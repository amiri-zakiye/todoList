import { TodoContextAction, TodosContextState } from "./types";
import * as actionTypes from "./constants"


export const todoReducer  = (state: TodosContextState,action: TodoContextAction) : TodosContextState => {
    switch(action.type){
        case actionTypes.ADD_TODO: 
            const id = Date.now().toString()           
            return {
                ...state,
                todos: [...state.todos,{...action.payload,id}]
            }
        case actionTypes.CHANGE_STATUS_TODO:
            return {
                ...state,
                todos: state.todos.map(item =>  
                    item.id === action.payload  
                        ? { ...item, isCompleted: !item.isCompleted }  
                        : item  
                ),  
            }
        case actionTypes.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== action.payload) 
            }
        case actionTypes.EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(item =>  
                    item.id === action.payload.id  
                        ? { ...item, title: action.payload.title }  
                        : item  
                ),
            }
        default: 
            throw new Error("Invalid action type")
        }

    
}

