import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { TodoContext } from "./TodoContext";
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

      const importantTotal =  todos.filter((todo)=>!! todo.important ).length;
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
          important:false
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
        setOpenModal(true);
        setEditingTodo(text); // Establecemos cuál TODO queremos editar
      };
      
      const updateTodo = (newText) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === editingTodo);
        newTodos[todoIndex].text = newText;
        saveTodos(newTodos);
        setEditingTodo(null); // Limpiamos el estado de edición
      };

      const toggleImportantTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos[todoIndex].important = !newTodos[todoIndex].important; // Alterna el valor
        saveTodos(newTodos);
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
            toggleImportantTodo,
            importantTotal,
            
        } }
        >
        {children}
        </TodoContext.Provider>
    )
}