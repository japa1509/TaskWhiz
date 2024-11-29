import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { SearchIcon } from "./Icons"
export function TodoSearch () {
    const {
        searchValue,
        setSearchValue,
    } = useContext(TodoContext)
    return (
        <div className="flex items-center border-b-2 border-gray-300 focus-within:border-blue-400 py-1 px-2 mx-6 text-xl rounded-lg bg-transparent justify-between">
        <input 
            className="outline-none bg-transparent" 
            type="search" 
            placeholder="Buscar" 
            value={searchValue}
            onChange={(event)=>{
                setSearchValue(event.target.value)
            }}
        />
        <span className="">
            <SearchIcon/>
        </span>
        </div>
    )
}