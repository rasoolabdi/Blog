import toLocalDateShort from "utils/dateFormatter";
import { toPerianDigits } from "utils/numberFormatter";
import truncateText from "utils/truncateText";

const { default: Table } = require("@/ui/Table");

const typeStyle = {
    free: {
        label: "رایگان",
        className: "badge--success"
    },
    premium: {
        label: "پولی",
        className: "badge--secondary"
    }
};

function PostRow({ post , index }) {
    const { type } = post;

    return (
        <Table.Row>
            <td>{toPerianDigits(index + 1)}</td>
            <td>{truncateText(post.title , 30)}</td>
            <td>{post.category.title}</td>
            <td>{post.author.name}</td>
            <td>{toLocalDateShort(post.createdAt)}</td>
            <td>
                <span className={`badge ${typeStyle[type].className}`}>
                    {typeStyle[type].label}
                </span>
            </td>
            <td>action</td>
        </Table.Row>
    )
};
export default PostRow;
