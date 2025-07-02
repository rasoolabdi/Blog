import { cookies } from "next/headers";
import PostList from "../_components/PostList";
import setCookieOnReq from "utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";


async function BlogPage() {   

    const cookieStore = cookies();
    const options = setCookieOnReq(cookieStore);
    const posts = await getPosts(options);
    
    return (
        <div>
            <p>لیست پست ها</p>
            <PostList posts={posts} />
        </div>
    )
};
export default BlogPage;