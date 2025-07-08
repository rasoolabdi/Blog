import { useEffect, useRef } from "react";

function useOutSideClick(handler , listenCapturing = true) {
    const ref = useRef();

    useEffect(() => {
        function handleClick(e) {
            if(ref.current && !ref.current.contains(e.target)) {
                handler();
            }
        };

        document.addEventListener("click" , handleClick , listenCapturing)

        return () => {
            document.removeEventListener("click" , handler , listenCapturing)
        };

    } , [handler , listenCapturing])

    return ref
};
export default useOutSideClick;