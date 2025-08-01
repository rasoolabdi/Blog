function SVGLoaderComponent(props) {
    return (
        <svg
            className="fill-primary-900"
            xmlns="http://www-w3.org/2000/svg"
            width={24}
            height={24}
            {...props}
        >
            <style>{"@keyframes spinner_svv2{to{transform:rotate(360deg)}}"}</style>
            <path 
                d="M10.14 1.16a11 11 0 0 0-9 8.92A1.59 1.59 0 0 0 2.46 12a1.52 1.52 0 0 0 1.65-1.3 8 8 0 0 1 6.66-6.61A1.42 1.42 0 0 0 12 2.69a1.57 1.57 0 0 0-1.86-1.53Z"
                style={{
                    transformOrigin: 'center',
                    animation: "spinner_svv2 .75s infinite linear"
                }}            
            />
        </svg>
    )
};
export default SVGLoaderComponent;