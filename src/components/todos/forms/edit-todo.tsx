import { useState } from "react"
import { useTodosContext } from "../../../context/todo"
import { Todo } from "../types"

const EditTodo = ({ todo,onSubmit } : { todo: Todo, onSubmit: () => void} ) => {
    const [title,setTitle] = useState<string>(todo.title)

    const { todoContextAction } = useTodosContext()

    const submitHandler = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(title.length < 1) return
        todoContextAction.edit(todo.id,title)
        setTitle("")
        onSubmit()
    }

    return (
        <form onSubmit={submitHandler} className="flex-col flex mt-5">
            <input className="w-full border border-slate-300 rounded h-8 p-2" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button className="w-full bg-green-500 rounded text-white h-8 mt-2" type="submit">Edit</button>
        </form>
    )
}
export default EditTodo