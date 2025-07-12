import { Suspense } from "react";
import CardWrapper from "./_components/CardsWrapper";
import FallBack from "@/ui/FallBack";
import LatestPosts from "./_components/LatestPosts";

async function Profile() {

    return (
        <div>
            <h1 className="text-xl mb-8 text-secondary-700">داشبورد</h1>
            <Suspense fallback={<FallBack />}>
                <CardWrapper />
            </Suspense>
            <h2 className="text-xl mb-4 text-secondary-700">آخرین پست ها</h2>
            <Suspense fallback={<FallBack />}>
                <LatestPosts />
            </Suspense>
        </div>
    )
};

export default Profile;