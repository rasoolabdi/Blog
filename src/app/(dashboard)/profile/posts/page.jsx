import { Suspense } from "react";
import PostsTable from "./_/components/PostsTable";
import FallBack from "@/ui/FallBack";
import Search from "@/ui/search";
import { CreatePost } from "./_/components/Buttons";
import queryString from "query-string";
import { getPosts } from "@/services/postServices";
import Pagination from "@/ui/Pagination";


async function Page({ searchParams }) {
    const query = queryString.stringify(await searchParams);
    const { totalPages } = await getPosts(query);

    return(
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-8 text-secondary-700 mb-12">
                <h1 className="font-bold text-xl">لیست پست ها</h1>
                <Search />
                <CreatePost />
            </div>
            <Suspense fallback={<FallBack />} key={query}>
                <PostsTable query={query} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    )
};
export default Page;