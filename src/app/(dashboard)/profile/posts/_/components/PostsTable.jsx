import { getPosts } from "@/services/postServices";
import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import PostRow from "./PostRow";

async function PostsTable({query=""}) {

    const posts = await getPosts(query);

    if(!posts.length) return <Empty resourceName="هیچ پستی" />

    return  (
        <div>
            <Table>
                <Table.Header>
                    <th>شناسه</th>
                    <th>عنوان</th>
                    <th>دسته بندی</th>
                    <th>نویسنده</th>
                    <th>تاریخ ایجاد</th>
                    <th>نوع</th>
                    <th>عملیات</th>
                </Table.Header>
                <Table.Body>
                    {posts.map((post , index) => (
                        <PostRow index={index} post={post} key={post._id} />
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
};
export default PostsTable;