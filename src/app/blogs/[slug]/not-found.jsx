import {ArrowRightIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

function NotFound() {
    return (
        <div className="container xl:max-w-screen-xl">
            <div className="flex justify-center pt-0">
                <div>
                    <p className="text-xl font-bold text-red-700 mb-8">
                        هیچ پستی یافت نشد
                    </p>
                    <Link
                        href="/blogs"
                        className="flex items-center gap-x-2 text-secondary-500"
                    >
                        <ArrowRightIcon className="w-6 h-6 text-primary-900" />
                        <span>برگشت به صفحه پست ها؟</span>
                    </Link>
                </div>
            </div>
        </div>
    )
};
export default NotFound;