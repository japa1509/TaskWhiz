import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
export function TodoCount () {
    const {
        completedTodos,
        totalTodos,
    } = useContext(TodoContext)
    return (
        
        <h3 className="text-center font-medium text-xl">
            {
                completedTodos===totalTodos
                ? "Felicidades haz completados todos los TODOs"
                :`Has completado ${completedTodos} de ${totalTodos} TODOS`
            }
        </h3>
    )
}

