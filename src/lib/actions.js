"use server";

import { createCommentApi } from "@/services/commentService";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import setCookieOnReq from "utils/setCookieOnReq";

export async function createComment(prevState , { formData , postId , parentId }) {
    const rawFormData = {
        postId,
        parentId,
        text: formData.get("text")
    }

    const cookieStore = await cookies();
    const options = setCookieOnReq(cookieStore);

    try {
        const { message } = await createCommentApi(rawFormData , options);
        revalidatePath("/blogs/[slug]");
        return { message };
    }
    catch(error) {
        return {
            error: error?.response?.data?.message
        }
    }
}