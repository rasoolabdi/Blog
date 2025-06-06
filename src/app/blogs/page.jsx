import { Suspense } from "react";
import PostList from "./_components/PostList";
import Spinner from "@/ui/Spinner";

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