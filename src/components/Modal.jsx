import { createPortal } from "react-dom"

export function Modal({ children }) {
    return (
        <>
        {createPortal (
            <div className="Modal-Background animate-fadeIn">
              {children}
            </div>,
            document.getElementById('modal')
        )}
        </>
    );
  }