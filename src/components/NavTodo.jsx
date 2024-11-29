import { StarOulineIcon, HomeIcon, MiDiaIcon, ProximoIcon } from "./Icons"
import { TodoContext } from "../context/TodoContext"
import { useContext } from "react"
export function NavTodo () {
    const {
        totalTodos,
        importantTotal
    } = useContext(TodoContext)
    return(
        <>
            <ul className=" flex flex-col pl-4 mt-6  border-b  ">
                 <li className="flex justify-between items-center hover:bg-gray-600 rounded-l-md pr-6 p-3"> <a className="flex gap-x-3 items-center"> <HomeIcon/>Tareas</a><span>{totalTodos}</span></li>
                 <li className="flex justify-between items-center hover:bg-gray-600 rounded-l-md pr-6 p-3"> <a className="flex gap-x-3 items-center"> <MiDiaIcon/>Mi dia</a><span>{totalTodos}</span></li>
                 <li className="flex justify-between items-center hover:bg-gray-600 rounded-l-md pr-6 p-3"> <a className="flex gap-x-3 items-center"> <StarOulineIcon/>Importante</a><span>{importantTotal}</span></li>
                 <li className="flex justify-between items-center hover:bg-gray-600 rounded-l-md pr-6 p-3"> <a className="flex gap-x-3 items-center"> <ProximoIcon/>Proxímo</a><span>{totalTodos}</span></li>
            </ul>
        </>
    )
}