import { useContext } from "react";
import { TodoCount } from "../components/TodoCount";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { EmptyTodos } from "../components/EmptyTodos";
import { TodosError } from "../components/TodosError";
import { TodosLoading } from "../components/TodosLoading";
import { Modal } from "../components/Modal";
import { TodoContext } from "../context/TodoContext";
import { FormTodo } from "../components/FormTodo";
import { SeccionNav } from "../components/SeccionNav";
import { NavHeader } from "../components/NavHeader";
import { NavTodo } from "../components/NavTodo";
import { FinalizedTodo } from "../components/FinalizedTodo";
function App() {
  const {
    deleteTodos,
    completeTodos,
    loading,
    error,
    filtrarTodo,
    openModal,
    setOpenModal,
    editarTodos,
    toggleImportantTodo,
    
  } = useContext(TodoContext);
  return (
    <>
      <main className="flex flex-col md:flex-row w-full h-screen gap-y-6">
      <section className="bg-[#262626] lg:w-1/4 text-white  md:w-1/3 hidden sm:block">
        <SeccionNav>
          <NavHeader/>
          <TodoSearch  />
          <NavTodo/>
        </SeccionNav>
      </section>
        <section className="md:w-2/3 lg:w-3/4 bg-[#1e1e1e] text-white">
        <TodoCount />
        <TodoList>
          {loading && (
            <>
              <TodosLoading />
              <TodosLoading />
              <TodosLoading />
            </>
          )}
          {error && <TodosError />}
          {!loading && filtrarTodo.length === 0 && <EmptyTodos />}
          {filtrarTodo.map((todo) => (
            <TodoItem
              key={todo.text}
              todo={todo.text}
              completed={todo.completed}
              important={todo.important}
              onToggleImportant={() => toggleImportantTodo(todo.text)}
              onComplete={() => completeTodos(todo.text)}
              onDelete={() => deleteTodos(todo.text)}
              onEdit={() => editarTodos(todo.text)}
            />
          ))}
        <FinalizedTodo/>
        </TodoList>
        <CreateTodoButton setOpenModal={setOpenModal} />
        {openModal && (
          <Modal>
            <FormTodo/>
          </Modal>
        )}
        </section>
      </main>
    </>
  );
}

export default App;
