import BreadCrumbs from "@/ui/BreadCrumbs";
import CreatePostForm from "./_/CreatePostForm";

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
            <CreatePostForm />
        </div>
    )
};
export default Page;