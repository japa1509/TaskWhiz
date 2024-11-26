import { TodoContext } from "../context/TodoContext";
import { useContext,useState, useEffect } from "react";
export function FormTodo () {
    const {
        addTodo,
        setOpenModal,
        updateTodo,
        editingTodo,
      } = useContext(TodoContext);
      const [newTodoValue, setNewTodoValue] = useState('');

      useEffect ( () => {
        if (editingTodo) {
            setNewTodoValue(editingTodo)
        }
      },[editingTodo] )
    
      const onSubmit = (event) => {
        event.preventDefault();
        if(editingTodo){
            updateTodo(newTodoValue)
        }else{

            addTodo(newTodoValue);
        }
        setOpenModal(false);
      };
    
      const onCancel = () => {
        setOpenModal(false);
      };
    
    //   const onChange = (event) => {
    //     setNewTodoValue(event.target.value);
    //   };
    return(
        <>
            <form onSubmit={onSubmit} className="flex flex-col justify-center items-center bg-white p-4 rounded-lg m">
                <label className="font-bold text-center text-xl text-[#1E1E1F] mb-6">{editingTodo ? "Editar TODO" : "Agregar un nuevo TODO"}</label>
                <textarea 
                value={newTodoValue}
                onChange={(e) => setNewTodoValue(e.target.value)}
                placeholder="Escribe tu TODO"
                className="text-center text-[#1e1e1f] text-xl rounded-md border border-[#202329] focus:outline-[#61DAFA] placeholder:text-[#A5A5A5] resize-none h-24 p-3"
                />
                <div className="flex justify-between items-center w-full mt-4">
                    <button 
                    type="button"
                    onClick={onCancel}
                    className="Form-button bg-transparent rounded-md">Cancelar</button>
                    <button 
                    type="submit"
                    className="Form-button bg-[#61DAFA] rounded-md">{editingTodo ? "Guardar" : "Añadir"}</button>
                </div>

            </form>
        </>
    )
}