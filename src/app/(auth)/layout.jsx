function Layout({ children }) {
    return (
        <div className="items-center flex justify-center mt-20">
            <div className="w-full max-w-md p-2">
                { children }
            </div>
        </div>
    )
};
export default Layout;