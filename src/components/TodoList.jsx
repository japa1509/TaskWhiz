import PropTypes from "prop-types"
import { HomeIcon } from "./Icons";
export function TodoList ({children}) {
    return (
        <ul className="w-full p-6">
            <h1 className="text-2xl font-semibold text-blue-400 flex items-center gap-4 mb-6"> <HomeIcon/> Tareas</h1>
            {children}
        </ul>
    )
}

TodoList.propTypes = { children: PropTypes.node.isRequired, };