import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
export function TodoSearch () {
    const {
        searchValue,
        setSearchValue,
    } = useContext(TodoContext)
    return (
        <input 
            className="py-2 px-4 w-full shadow-md text-xl rounded-lg text-center" 
            type="search" 
            placeholder="cortar cebolla" 
            value={searchValue}
            onChange={(event)=>{
                setSearchValue(event.target.value)
            }}
        />
    )
}