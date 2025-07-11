import { fetchCardData } from "@/services/data";
import Card from "./_components/Card";

async function Profile() {
    const { numberOfUsers , numberOfComments , numberOfPosts} = await fetchCardData();
    
    return (
        <div>
            <div className="grid gap-6 md:grid-cols-3 mb-8">
                <Card title="کاربران" type="users" value={numberOfUsers}/>
                <Card title="پست ها" type="posts" value={numberOfPosts} />
                <Card title="نظرات" type="comments" value={numberOfComments} />
        
            </div>
        </div>
    )
};

export default Profile;