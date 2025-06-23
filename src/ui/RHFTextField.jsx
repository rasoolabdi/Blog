
function RHFTextField({ name , register , label , errors , type = "text" , dir = "rtl" , required , ...rest}) {
    const errorMessages = errors?.[name];
    const hasError = !!(errors && errorMessages);

    return (
        <div className={`textField relative ${hasError ? "textField--invalid" : ""}`}>
            <label>
                {label}
                {required && <span className="text-error">*</span>} 
            </label>
            <input 
                name={name}
                id={name}
                { ... register(name) }
                { ...rest }
                dir={dir}
                type={type}
                autoComplete="off"
                className={`textField__input ${dir === "ltr" ? "text-left" : "text-right"}`}
            />
            {errors && errors[name] && (
                <span className="text-red-600 block text-sm mt-2">
                    {errors[name]?.message}
                </span>
            )}
        </div>
    )
};

export default RHFTextField;