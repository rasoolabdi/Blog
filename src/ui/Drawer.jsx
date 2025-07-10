"use client";

import { createPortal } from "react-dom";

function Drawer({ open , onClose , children }) {
    return createPortal (
        <>
            <div 
                onClick={onClose}
                className={`backdrop-blur-sm fixed inset-0 h-screen bg-secondary-800 bg-opacity-30 ${
                    open ? "block" : "pointer-events-none hidden"
                }`}
            ></div>
            <div
                onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                }}
                className={`fixed top-0 w-[250px] h-full transition-transform transform ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="bg-secondary-0 max-w-full overflow-y-auto">
                    { children }
                </div>
            </div>
        </>,
        document.body
    )
};
export default Drawer;