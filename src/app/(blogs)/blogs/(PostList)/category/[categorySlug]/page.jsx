import { getPosts } from "@/services/postServices";
import PostList from "app/(blogs)/blogs/_components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";
import setCookieOnReq from "utils/setCookieOnReq";

async function Category({ params , searchParams }) {
    const  { categorySlug }  = await params;
    const searchParam = await searchParams;
    const queries = queryString.stringify(searchParam) + "&" + `categorySlug=${categorySlug}`;
    const queryCookie = await cookies();
    const options = setCookieOnReq(queryCookie);
    const {posts} = await getPosts(queries ,options);

    const { search } = await searchParams;

    return (
        <>
            {search ? (
                <p className="mb-4 text-secondary-700">
                    {
                        posts.length === 0 ? "هیچ پستی با این مشخصات یافت نشد" : `نشان دادن ${posts.length} نتیجه برای` 
                    }
                    {" "}
                    <span className="font-bold">&quot;{search}&quot;</span>
                </p>
            ) : null}
            <PostList posts={posts} />
        </>
    )
};
export default Category;