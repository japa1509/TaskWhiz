import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { ArrowDownIcon, ArrowRightIcon } from "./Icons";

export function FinalizedTodo() {
  const { completedTodos } = useContext(TodoContext);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <h3 className="mt-6 text-white flex gap-x-4 items-center">
        <button onClick={handleToggle} className="focus:outline-none">
          {isExpanded ? <ArrowDownIcon /> : <ArrowRightIcon />}
        </button>
        Completados <span className="">{completedTodos}</span>
      </h3>
      {isExpanded && (
        <ul className="mt-2 space-y-2">
          <li>funciona</li>
        </ul>
      )}
    </>
  );
}
