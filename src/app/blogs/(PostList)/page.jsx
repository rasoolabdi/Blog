import { Suspense } from "react";
import Spinner from "@/ui/Spinner";
import PostList from "../_components/PostList";

async function BlogPage() {   
    return (
        <div>
            <p>لیست پست ها</p>
            <Suspense fallback={<Spinner />}>
                <PostList />
            </Suspense>
        </div>
    )
};
export default BlogPage;