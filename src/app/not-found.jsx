"use client";

import useMoveBack from "@/hooks/useMoveBack";
import Button from "@/ui/Button";
import {ArrowRightIcon} from "@heroicons/react/24/outline";

function NotFound() {
    const moveBack = useMoveBack();

    return (
        <div className="h-screen">
            <div className="container xl:max-w-screen-xl">
                <div className="flex justify-center pt-10">
                    <div>
                        <h1 className="text-xl font-bold text-secondary-700 mb-8">
                            صفحه مورد نظر شما یافت نشد
                        </h1>
                        <Button
                            onClick={moveBack}
                            variant="outline"
                            className="flex items-center gap-x-2 text-secondary-500"
                        >
                            <ArrowRightIcon className="w-6 h-6 text-primary-900" />
                            <span>برگشت</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default NotFound;