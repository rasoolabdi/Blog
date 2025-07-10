import Spinner from "@/ui/Spinner";

function Loading() {
    return (
        <div className="grid items-center gap-x-4 justify-center">
            <span className="text-lg text-secondary-500">لطفا کمی صبر کنید</span>
            <Spinner />
        </div>
    )
};
export default Loading;