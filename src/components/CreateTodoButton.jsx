import { PlusIcon } from "./Icons"
export function CreateTodoButton ({setOpenModal}) {
    return (
        <button 
        onClick={() =>{
            setOpenModal(state => !state)
        }}
        className="btn-agg btn-hover">        
        <PlusIcon/></button>
    )
}