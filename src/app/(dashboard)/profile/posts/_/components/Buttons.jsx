"use client";

import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import { PlusIcon } from "@heroicons/react/24/outline";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import useDeletePost from "../useDeletePost";
import { useRouter } from "next/navigation";


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

export function DeletePost({ post: {_id: id , title} }) {
    const [open , setOpen] = useState(false);
    const {isDeleting , deletePost } = useDeletePost();
    const router = useRouter();

    return (
        <>
            <ButtonIcon 
                onClick={() => setOpen(true)}
                variant="outline"
            >
                <TrashIcon className="text-error" />
            </ButtonIcon>
            <Modal
                title={`حذف ${title}`}
                open={open}
                onClose={() => setOpen(false)}
            >
                <ConfirmDelete 
                    resourceName={title}
                    onClose={() => setOpen(false)}
                    disabled={isDeleting}
                    onConfirm={(e) => {
                        e.preventDefault();
                        deletePost({id} , {
                            onSuccess: () => {
                                setOpen(false);
                                router.refresh("/profile/posts");
                            }
                        })
                    }}
                />
            </Modal>
        </>
    )
};

export function UpdatePost({ id }) {
    return (
        <Link href={`/profile/posts/${id}/edit`}>
            <ButtonIcon variant="outline">
                <PencilIcon className="text-primary-900" />
            </ButtonIcon>
        </Link>
    )
};
