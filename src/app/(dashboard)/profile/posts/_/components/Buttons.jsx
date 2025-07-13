
import ButtonIcon from "@/ui/ButtonIcon";
import { PlusIcon } from "@heroicons/react/24/outline";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";


export function CreatePost() {
    return(
        <Link 
            href="/profile/posts/create"
            className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 text-sm text-white px-4
                font-medium transition-colors hover:bg-primary-700"
        >
            <span className="hidden md:block">ایجاد پست جدید</span>
            <PlusIcon className="w-5" />
        </Link>
    )
}

export async function DeletePost({ id }) {
    return (
        <Link href={`/profile/posts/${id}`}>
            <ButtonIcon variant="outline">
                <TrashIcon className="text-error" />
            </ButtonIcon>
        </Link>
    )
};

export async function UpdatePost({ id }) {
    return (
        <Link href={`/profile/posts/${id}/edit`}>
            <ButtonIcon variant="outline">
                <PencilIcon className="text-primary-900" />
            </ButtonIcon>
        </Link>
    )
};
