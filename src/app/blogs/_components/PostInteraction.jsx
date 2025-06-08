import ButtonIcon from "@/ui/ButtonIcon";
import { BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from "@heroicons/react/24/outline";
import { toPerianDigits } from "utils/numberFormatter";

function PostInteraction({ post }) {
    return (
        <div className="flex items-center gap-x-4"> 
            <ButtonIcon variant="secondary">
                <ChatBubbleOvalLeftEllipsisIcon />
                <span>{toPerianDigits(post.commentsCount)}</span>
            </ButtonIcon>
            <ButtonIcon variant="red">
                <HeartIcon />
            </ButtonIcon>
            <ButtonIcon variant="primary">
                <BookmarkIcon  />
            </ButtonIcon>
        </div>
    )
};
export default PostInteraction;