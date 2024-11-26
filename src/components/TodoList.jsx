import PropTypes from "prop-types"
export function TodoList ({children}) {
    return (
        <ul className="w-full">
            {children}
        </ul>
    )
}

TodoList.propTypes = { children: PropTypes.node.isRequired, };