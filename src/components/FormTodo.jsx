import { TodoContext } from "../context/TodoContext";
import { useContext, useState, useEffect } from "react";
export function FormTodo() {
  const { addTodo, setOpenModal, updateTodo, editingTodo } =
    useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    if (editingTodo) {
      setNewTodoValue(editingTodo);
    }
  }, [editingTodo]);

  const onSubmit = (event) => {
    event.preventDefault();

    // Eliminar espacios innecesarios
    const trimmedValue = newTodoValue.trim();

    // Validar si el texto está vacío
    if (trimmedValue === "") {
      setInputError(true);
      return;
    }

    if (editingTodo) {
      // Actualizar tarea si estás en modo edición
      updateTodo(trimmedValue);
    } else {
      // Agregar nueva tarea si no estás en modo edición
      addTodo(trimmedValue);
    }

    setOpenModal(false); // Cerrar el modal
  };

  const onCancel = () => {
    setOpenModal(false);
    setInputError(false);
  };

  const onChange = (event) => {
    const value = event.target.value;
    setNewTodoValue(value);
    if (value.trim() !== "") {
      setInputError(false); // Ocultar error si escribe algo válido
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-center items-center bg-white p-4 rounded-lg"
      >
        <label className="font-bold text-center text-xl text-[#1E1E1F] mb-6">
          {editingTodo ? "Editar TODO" : "Agregar un nuevo TODO"}
        </label>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Escribe tu TODO"
          className="text-center text-[#1e1e1f] text-xl rounded-md border border-[#202329] focus:outline-[#61DAFA] placeholder:text-[#A5A5A5] resize-none h-24 p-3"
        />
        {inputError && (
          <p className="text-red-500 text-sm mt-2">
            Por favor, escribe una tarea válida.
          </p>
        )}
        <div className="flex justify-between items-center w-full mt-4">
          <button
            type="button"
            onClick={onCancel}
            className="Form-button bg-transparent rounded-md"
          >
            Cancelar
          </button>
          <button
            
            type="submit"
            className="Form-button bg-[#61DAFA] rounded-md"
          >
            {editingTodo ? "Guardar" : "Añadir"}
          </button>
        </div>
      </form>
    </>
  );
}
