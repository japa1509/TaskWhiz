import PropTypes from "prop-types"
export function SeccionNav ({children}) {
    return(
        <nav className="">
            {children}
        </nav>
    )
}

SeccionNav.propTypes = { children: PropTypes.node.isRequired, };