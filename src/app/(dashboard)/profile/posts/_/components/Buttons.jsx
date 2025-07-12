import ButtonIcon from "@/ui/ButtonIcon";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";


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
