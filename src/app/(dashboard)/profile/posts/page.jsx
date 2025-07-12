import { Suspense } from "react";
import PostsTable from "./_/components/PostsTable";
import FallBack from "@/ui/FallBack";


function Page() {
    return(
        <div>
            <Suspense fallback={<FallBack />}>
                <PostsTable />
            </Suspense>
        </div>
    )
};
export default Page;