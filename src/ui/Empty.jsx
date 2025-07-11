function Empty({ resourceName = ""}) {
    return (
        <div className="items-center bg-slate-200 border rounded-lg p-8 text-secondary-800">
            <p>یافت نشد {" "} {resourceName}</p>
        </div>
    )
};
export default Empty;