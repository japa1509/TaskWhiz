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
  } = useContext(TodoContext);
  return (
    <>
      <main className="flex flex-col justify-center items-center p-4 gap-y-6">
        <h1 className="text-center font-bold text-4xl">Todos-Anime</h1>

        <TodoCount />
        <TodoSearch  />

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
              onComplete={() => completeTodos(todo.text)}
              onDelete={() => deleteTodos(todo.text)}
              onEdit={() => editarTodos(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton setOpenModal={setOpenModal} />
        {openModal && (
          <Modal>
            <FormTodo/>
          </Modal>
        )}
      </main>
    </>
  );
}

export default App;
