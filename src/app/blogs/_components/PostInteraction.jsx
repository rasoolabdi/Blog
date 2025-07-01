"use client";
import { bookmarkedPostsApi, likedPostsApi } from "@/services/postServices";
import ButtonIcon from "@/ui/ButtonIcon";
import { BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as SolidBookmarkIcon, HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { toPerianDigits } from "utils/numberFormatter";


function PostInteraction({ post }) {
    const router = useRouter();

    const likePostHandler = async (postId) => {
        try {
            const { message } = await likedPostsApi(postId)
            toast.success(message);
            router.refresh();
        }
        catch(error) {
            toast.error(error?.response?.data?.message);
        }
    };

    const bookmarkPostHandler = async (postId) => {
        try {
            const { message } = await bookmarkedPostsApi(postId);
            toast.success(message);
            router.refresh();
        }
        catch(error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <div className="flex items-center gap-x-4"> 
            <ButtonIcon variant="secondary">
                <ChatBubbleOvalLeftEllipsisIcon />
                <span>{toPerianDigits(post.commentsCount)}</span>
            </ButtonIcon>
            <ButtonIcon variant="red" onClick={() => likePostHandler(post._id)}>
                {post.isLiked ? (<SolidHeartIcon />) : (<HeartIcon />)}
            </ButtonIcon>
            <ButtonIcon variant="primary" onClick={() => bookmarkPostHandler(post._id)}>
                {post.isBookmarked ? (<SolidBookmarkIcon />) : (<BookmarkIcon  />)}
            </ButtonIcon>
        </div>
    )
};
export default PostInteraction;