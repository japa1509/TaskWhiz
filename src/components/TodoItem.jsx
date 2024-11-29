import PropTypes from "prop-types";
import { useState } from "react";
import { DeleteIcon, StarFullIcon, StarOulineIcon,EditIcon, CircleIcon, CircleCheckIcon, MostrarMasIcon} from "./Icons";
export function TodoItem (props)  {
  const[toggleOpciones, setToggleOpciones ] = useState (false)
    return (
        <li className="flex shadow-md px-6 items-center py-3 bg-[#252423] hover:bg-[#3b3a39] mb-1">
        <button
        className={` hover:text-green-600 ${props.completed &&  "text-green-600"  }`  } 
        onClick={props.onComplete}>
        {props.completed  ? <CircleCheckIcon/> :<CircleIcon className="hover:hidden" />}</button>

        <button className="flex flex-col grow cursor-pointer px-4">
          <span
          className={` ${props.completed && "line-through"  } ${props.important && ""}`}
          >
              {props.todo}
          </span>
          <div className="flex gap-x-2 text-xs text-[#62615f]">
              <span>Tarea</span>
              <span>*</span>
              <span>Vence el lun., 2 diciembre</span>
          </div>
        </button>

        <button 
        className="cursor-pointer text-yellow-500 mr-4" 
        onClick={props.onToggleImportant} // Nueva función pasada por props
      >
        {props.important  ? <StarFullIcon /> : <StarOulineIcon />}
        </button>

        <div 
        className="cursor-pointer relative p-1 hover:bg-gray-600 rounded-md "
        // onClick={() => setToggleOpciones(!toggleOpciones)}
        onMouseEnter={() => setToggleOpciones(true)}
        onMouseLeave={() => setToggleOpciones(false)}
        >
          <MostrarMasIcon/>
        {toggleOpciones && (
          <>
        {/* opciones */}
        <div className="absolute flex top-8 right-0 bg-[#1e1e1e] rounded-md shadow-lg p-2">
          {/* EditButton */}
          <button
            type="button"
            onClick={props.onEdit}
            ><EditIcon />
          </button>
          {/* DeleteButton */}
          <button
            className="hover:text-red-600"
            onClick={props.onDelete}
            ><DeleteIcon />
        </button>
        </div>

        </>
        )}
        </div>

        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    important: PropTypes.bool.isRequired,
    onComplete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onToggleImportant: PropTypes.func.isRequired,
};