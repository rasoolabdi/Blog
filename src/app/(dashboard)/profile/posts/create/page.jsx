import BreadCrumbs from "@/ui/BreadCrumbs";

function Page() {
    return (
        <div>
            <BreadCrumbs 
                breadcrumbs = {[
                    {
                        label: "پست ها",
                        href: "/profile/posts"
                    },
                    {
                        label: "ایجاد پست",
                        href: "/profile/posts/create",
                        active: true
                    }
                ]}
            />
            form create posts
        </div>
    )
};
export default Page;