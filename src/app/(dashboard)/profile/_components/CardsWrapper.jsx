import { fetchCardData } from "@/services/data";
import Card from "app/(dashboard)/profile/_components/Card";


async function CardWrapper() {
    const { numberOfUsers , numberOfComments , numberOfPosts} = await fetchCardData();

    return (
        <div className="grid gap-6 md:grid-cols-3 mb-8">
            <Card title="کاربران" type="users" value={numberOfUsers}/>
                <Card title="پست ها" type="posts" value={numberOfPosts} />
            <Card title="نظرات" type="comments" value={numberOfComments} />
        </div>
    )
};
export default CardWrapper;