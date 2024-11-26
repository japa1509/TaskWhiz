import { createContext, useState} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage("TODOS_V1", []);
      const [searchValue, setSearchValue] = useState("");
      const [openModal, setOpenModal] = useState(false);
      const [editingTodo, setEditingTodo] = useState(null);

    
      const completedTodos = todos.filter((todo) => !!todo.completed).length;
      const totalTodos = todos.length;
    
      const filtrarTodo = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      });

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false,
        });
        saveTodos(newTodos);
      };
    
      const completeTodos = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };
    
      const deleteTodos = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

      const editarTodos = (text) => {
        setOpenModal(true); // Abrimos el modal
        setEditingTodo(text); // Establecemos cuál TODO queremos editar
      };
      
      const updateTodo = (newText) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === editingTodo);
        newTodos[todoIndex].text = newText;
        saveTodos(newTodos);
        setEditingTodo(null); // Limpiamos el estado de edición
      };
      

    return (
        <TodoContext.Provider
        value={ {
            deleteTodos,
            completeTodos,
            loading,
            error,
            completedTodos,
            totalTodos,
            filtrarTodo,
            setSearchValue,
            searchValue,
            openModal,
            setOpenModal,
            addTodo,
            editarTodos,
            updateTodo,
            editingTodo,
            
        } }
        >
        {children}
        </TodoContext.Provider>
    )
}