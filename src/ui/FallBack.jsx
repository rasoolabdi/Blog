import SVGLoaderComponent from "./SVGLoaderComponent";

function FallBack() {
    return (
        <div className="flex items-center gap-x-4 justify-center my-12 mx-auto">
            <span className="text-secondary-500">در حال بارگذاری اطلاعات</span>
            <SVGLoaderComponent />
        </div>
    )
};
export default FallBack;