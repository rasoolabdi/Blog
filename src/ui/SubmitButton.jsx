import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";
import SVGLoaderComponent from "./SVGLoaderComponent";

const { default: Button } = require("./Button");


function SubmittButton({ children , className , ...rest}) {

    const { pending } = useFormStatus();

    return (
        <Button 
            className={`flex items-center justify-center gap-x-4 py-4 w-full ${className}`}
            { ...rest }
            disabled={pending}
        >
            { children }
            {/* {pending && <SpinnerMini />} */}
            {pending && <SVGLoaderComponent />}
        </Button>
    )
};
export default SubmittButton;