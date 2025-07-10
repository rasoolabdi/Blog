import { cookies } from "next/headers";
import PostList from "../_components/PostList";
import setCookieOnReq from "utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";


async function BlogPage({ searchParams }) {   
    const queries = queryString.stringify(await searchParams);
    const cookieStore = await cookies();
    const options = setCookieOnReq(cookieStore);
    const posts = await getPosts(queries , options);
    
    const { search } = await searchParams;

    return (
        <div>
            {search ? (
                <p className="font-bold mb-8">
                    {posts.length === 0 ? "هیچ پستی با این مشخصات یافت نشد" : `نشان دادن "${posts.length}" نتیجه برای`}
                    <span className="font-bold">&quot;{search}&quot;</span>
                </p>
            ) : null}
            <p className="mb-4">لیست پست ها</p>
            <PostList posts={posts} />
        </div>
    )
};
export default BlogPage;