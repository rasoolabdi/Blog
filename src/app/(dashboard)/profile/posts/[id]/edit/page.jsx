import { getPostById } from "@/services/postServices";
import BreadCrumbs from "@/ui/BreadCrumbs";
import { notFound } from "next/navigation";
import CreatePostForm from "../../create/_/CreatePostForm";


async function EditPage({ params: {id} }) {
    const {post} = await getPostById(id);
    if(!post) {
        notFound()
    };

    return (
        <div>
            <BreadCrumbs 
                breadcrumbs={[
                    {
                        label: "پست ها",
                        href: "/profile/posts"
                    },
                    {
                        label: "ویرایش پست ها",
                        href: `/profile/posts/${id}/edit`
                    }
                ]}
            />
            <CreatePostForm postToEdit={post} />
        </div>
    )
};
export default EditPage;