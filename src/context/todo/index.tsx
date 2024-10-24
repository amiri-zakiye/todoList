
import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { TodosContextState,TodoReducer,TodoContextType } from "./types";
import { todoReducer } from "./reducer";
import { todoContextActions } from "./actions";
import { todoContextSelectors } from "./selectors";

export const initialState : TodosContextState = {
   todos: JSON.parse(localStorage.getItem("todos") || ""),
}


const todoContext = createContext([] as TodoContextType)

export const TodosProvider = ({ children }: { children: React.ReactNode}) => {
    
    const [ state, dispatch ] = useReducer<TodoReducer>(todoReducer,initialState)
    const value = useMemo(() => [state,dispatch],[state])

    const { todos } = state
    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

    return(
        <todoContext.Provider value={value as TodoContextType}>
            {children}
        </todoContext.Provider>
    )
}

export const useTodosContext = () => {
    const context = useContext(todoContext)

    if(context === undefined){
        throw new Error("Context Should be used within a provider.")
    }

    const [state, dispatch] = context

    const todoContextAction = todoContextActions(dispatch)
    const todoContextState = todoContextSelectors(state)


    return { state, todoContextAction , todoContextState}
}