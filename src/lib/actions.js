"use server";

import { createCommentApi } from "@/services/commentService";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import setCookieOnReq from "utils/setCookieOnReq";

export async function createComment(postId , parentId , formData) {
    const rawFormData = {
        postId,
        parentId,
        text: formData.get("text")
    }

    const cookieStore = await cookies();
    const options = setCookieOnReq(cookieStore);

    try {
        const { message } = await createCommentApi(rawFormData , options);
        console.log(message)
    }
    catch(error) {
        console.log(error?.response?.data?.message)
    }
    revalidatePath("/blogs")
}