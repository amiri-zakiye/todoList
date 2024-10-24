import { useTodosContext } from "../../context/todo"
import TodoItem from "./todoItem"

const TodoList = () => {

    const  { todoContextState: todos} = useTodosContext()
    console.log(todos)

    return(
        <ul>
            {todos && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </ul>      
    )

}

export default TodoList