"use client";

import Button from "@/ui/Button";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import Comment from "./Comment";
import classNames from "classnames";
import Modal from "@/ui/Modal";
import { useState } from "react";
import CommentForm from "./CommentForm";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function PostComment({ post }) {
    const [open , setOpen] = useState(false);
    const [parent , setParent] = useState(null);
    const {user} = useAuth();
    const router = useRouter();

    const addNewCommentHandler = (parent) => {
        if(!user) {
            router.push("/signin");
            return;
        }
        setParent(parent);
        setOpen(true)
    }

    return (
        <div className="mb-10">
            <div className="flex flex-col items-center lg:flex-row justify-between gap-y-3 mb-8">
                <h2 className="text-2xl font-bold text-secondary-800">نظرات کاربران</h2>
                <Button
                    variant="outline"
                    className="flex items-center py-2"
                    onClick={() => addNewCommentHandler(null)}
                >
                    <QuestionMarkCircleIcon className="w-5 h-5 ml-1" />
                    <span>ثبت نظر جدید</span>
                </Button>
                <Modal 
                    open={open} 
                    onClose={() => setOpen(false)}
                    title={parent ? "پاسخ به نظر" : "ثبت نظر جدید"}
                    description={parent ? parent.user.name : "لطفا نظر خود را وارد کنید"}
                >
                    <CommentForm 
                        postId={post._id} 
                        parentId={parent ? parent._id : null} 
                        onClose={() => setOpen(false)}
                    />
                </Modal>
            </div>
            <div className="space-y-8 post-comments bg-secondary-0 rounded-xl py-6 px-3 lg:px-6">
                {post.comments.length > 0 ? (
                    post.comments.map((comment) => {
                        return (
                            <div key={comment._id} >
                                <div className="border border-secondary-200 rounded-xl p-2 sm:p-4 mb-3">
                                    <Comment 
                                        comment={comment} 
                                        onAddComment={() => addNewCommentHandler(comment) }
                                    />
                                </div>
                                <div className="post-comments__answer mr-2 sm:mr-8 space-y-3">
                                    {comment.answers.map((item , index) => {
                                        return (
                                            <div key={item._id} className="relative">
                                                <div className={classNames("answer-item border border-secondary-100 bg-secondary-50/80 rounded-xl p-2 sm:p-4",
                                                    {"last-item": index + 1 === comment.answers.length}
                                                )}>
                                                    <Comment comment={item} key={item._id} />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <p className="text-secondary-500">برای این پست نظری ثبت نشده است</p>
                )}
            </div>
        </div>
    )
};
export default PostComment;