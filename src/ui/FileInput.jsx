import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";

function FileInput({ label , name , value , onChange , isRequired , className , dir="rtl" , validationSchema = {} , errors , ...rest}) {
    const errorMessage = errors?.[name];
    const hasError = !!(errors && errorMessage);

    return (
        <div className={`textField relative ${hasError ? "textField--invalid" : ""}`}>
            <label
                htmlFor="file-upload"
                className={`cursor-pointer border-2 border-primary-900 rounded-lg px-3 py-2 text-primary-900 flex items-center justify-center
                    gap-x-2 ${className}    
                `}
            >
                {label}
                {isRequired && <span className="text-error">*</span>}
                <ArrowUpTrayIcon className="w-6 h-6" />
                <input 
                    id="file-upload"
                    type="file"
                    className="sr-only"
                    name={name}
                    dir={dir}
                    value={value}
                    onChange={onChange}
                    { ...rest }
                />
            </label>
            {errors && errors[name] && (
                <span className="text-red-600 text-xs mt-2">
                    {errors[name]?.message}
                </span>
            )}
        </div>
    )
};
export default FileInput;