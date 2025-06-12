function TextField({ name , value , onChange , label , isRequired , className , dir = "rtl" , type = "text"}) {
    return (
        <div className="textField">
            <label htmlFor={name} className="text-secondary-600 text-sm">
                {label}
                {isRequired && <span className="text-error">*</span>}
            </label>
            <input 
                type={type}
                name={name} 
                id={name}
                value={value}
                onChange={onChange}
                dir={dir}
                className={`textField__input ${dir === "ltr" ? "text-left" : "text-right"} ${className} `}
            />
        </div>
    )
};
export default TextField;