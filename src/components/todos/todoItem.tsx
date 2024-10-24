import { useState } from "react"
import { useTodosContext } from "../../context/todo"
import { Todo } from "./types"
import Modal from "../modal"
import EditTodo from "./forms/edit-todo"

const TodoItem = ({todo} : {todo: Todo}) => {
    const [showModal,setShowModal] = useState(false)
    const { todoContextAction } = useTodosContext()
    const  { changeStatus , removeTodo} = todoContextAction

    const updateTodoStatus = () => {
        changeStatus(todo.id)
    }

    const deleteTodo = () => {
        removeTodo(todo.id)
    }

    const closeModal = () => setShowModal(false)

 
    return(
        <li className="flex items-center justify-between border rounded p-2 mt-3 border-slate-300">
           <p> {todo.title}</p>
           <div>
            <label  htmlFor="" className="border-r p-2 border-slate-300 ">
                {todo.isCompleted ?  "UnMark as Done" : "Mark as Done" }
                <input type="checkbox" defaultChecked={todo.isCompleted} value={todo.isCompleted ? 1: 0} onChange={updateTodoStatus} />
            </label>
            <button  className="border-r p-2 border-slate-300  " onClick={deleteTodo} type="button">Delete</button>
            <button className="ml-2" onClick={() => setShowModal(true)} type="button">Edit</button>
           </div>
            {showModal && <Modal children={<EditTodo todo={todo} onSubmit={closeModal} />} onClose={closeModal} />}
        </li>
    )
}

export default TodoItem