function RHFSelect({ name , label , regsiter , options , required}) {
    return (
        <div>
            <label htmlFor={name} className="mb-2 block text-secondary-700">
                {label}
                {required && <span className="text-error">*</span>}
            </label>
            <select
                { ...regsiter(name) }
                id={name}
                className="textField__input"
            >
                {options.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    )
}
export default RHFSelect;