import PropTypes from "prop-types";
import { DeleteIcon, CheckIcon } from "./Icons";
export function TodoItem (props)  {
    return (
        <li className="flex justify-between shadow-md px-6 items-center py-3">
        <span 
        className={` ${props.completed && "text-green-600"  }`} 
        onClick={props.onComplete}
        ><CheckIcon/></span>
        <p
        className={` ${props.completed && "line-through"  }`}
        >
            {props.todo}
        </p>
        <span
        className="hover:text-red-600"
        onClick={props.onDelete}
        ><DeleteIcon/></span>
        <button
        type="button"
        onClick={props.onEdit}
        >Editar</button>
        </li>
    )
}

TodoItem.propTypes = { todo: PropTypes.node.isRequired, };