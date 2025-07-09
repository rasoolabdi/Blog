
function TextArea({ name , label , dir="rtl" , value , onChange , isRequired}) {
    return(
        <div className="textField">
            <label htmlFor={name}>
                { label }
                {isRequired ? <span className="text-error">*</span> : ""}
            </label>
            <textarea
                name={name}
                id={name}
                dir={dir}
                value={value}
                onChange={onChange}
                className={`textField__input mt-2 min-h-[150px] leading-8 ${dir === "ltr" ? "text-left" : "text-right"}`}
            >
            </textarea>
        </div>
    )
};
export default TextArea;