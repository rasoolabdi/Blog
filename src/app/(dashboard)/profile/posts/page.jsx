import { Suspense } from "react";
import PostsTable from "./_/components/PostsTable";
import FallBack from "@/ui/FallBack";
import Search from "@/ui/search";
import { CreatePost } from "./_/components/Buttons";
import queryString from "query-string";


async function Page({ searchParams }) {
    const query = queryString.stringify(await searchParams);

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
        </div>
    )
};
export default Page;