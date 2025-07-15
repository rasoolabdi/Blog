import { FaceFrownIcon } from "@heroicons/react/24/outline";

function NotFound() {
    return (
        <main className="flex h-full flex-col items-center justify-center gap-2">
            <FaceFrownIcon className="w-10 text-secondary-400" />
            <h2 className="text-xl font-semibold"> 
                صفحه مورد نظر شما یافت نشد
            </h2>
            <p>پستی با این مشخصات برای ویرایش یافت نشد</p>
            <Link
                href="/profile/posts"
                className="mt-4 rounded-md bg-secondary-500 px-4 py-2 text-sm text-white transition-colors hover:bg-primary-600"
            >
                برگشت
            </Link>
        </main>
    )
};
export default NotFound;