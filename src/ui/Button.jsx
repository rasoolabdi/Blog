const btnType = {
    primary: "btn--primary",
    secondary: "btn--secondary",
    outline: "btn--outline",
    danger: "btn--danger"
}

function Button({ onClick , children , rest , variant="primary" , className}) {
    return (
        <button
            onClick={onClick}
            className={`btn ${btnType[variant]} ${className} `}
            { ...rest }
        >
            { children }
        </button>
    )
};
export default Button;