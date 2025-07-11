import { ChatBubbleBottomCenterTextIcon, DocumentIcon, UserGroupIcon } from "@heroicons/react/24/outline";


const IconMap = {
    comments: ChatBubbleBottomCenterTextIcon,
    users: UserGroupIcon,
    posts: DocumentIcon
}

function Card({ title , value , type }) {
    const Icon = IconMap[type];

    return (
        <div className="rounded-xl bg-secondary-50 p-2 shadow-sm">
            <div className="flex p-4 text-secondary-600">
                {Icon ? <Icon className="h-6 w-6" /> : null }
                <h3 className="mr-2 text-sm font-medium">{title}</h3>
            </div>
            <p className="truncate rounded-xl bg-secondary-0 px-4 py-8 text-center text-2xl text-secondary-500">
                {value}
            </p>
        </div>
    )
};
export default Card;