import Avatar from "@/ui/Avatar";

function Author({ post }) {
    return (
        <div className="flex items-center gap-x-1">
            <Avatar src={post.author.avatarUrl} />
            <span className="text-sm text-secondary-500">
                {post.author.name}
            </span>
        </div>
    )
};
export default Author;