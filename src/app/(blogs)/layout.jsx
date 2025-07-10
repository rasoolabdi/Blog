const { default: Header } = require("@/components/Header");

function Layout({ children }) {
    return (
        <div>
            <Header />
            <div className="container xl:max-w-screen-2xl">
                { children }
            </div>
        </div>
    )
}
export default Layout;