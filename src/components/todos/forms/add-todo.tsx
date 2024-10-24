import { useState } from "react"
import { useTodosContext } from "../../../context/todo"
import { Todo } from "../types"

const AddTodo = () => {
    const [title,setTitle] = useState<string>("")

    const { todoContextAction } = useTodosContext()

    const submitHandler = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(title.length < 1) return
        todoContextAction.add({title : title, isCompleted: false} as Todo)
        setTitle("")
    }

    return (
        <form className="flex items-center" onSubmit={submitHandler}>
            <input className="w-[80%] border border-slate-300 rounded h-10 p-2" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button className="ml-3 bg-green-500 text-white rounded flex items-center justify-center w-[20%] h-10" type="submit">Add</button>
        </form>
    )
}
export default AddTodo