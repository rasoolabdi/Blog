"use client";

import { createComment } from "@/lib/actions";
import SubmittButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import { useState } from "react";



function CommentForm({ postId , parentId }) {
    const [text , setText] = useState("");

    return (
        <div>
            <div className="flex justify-center mt-4">
                <div className="max-w-lg w-full">
                    <form className="space-y-7" action={createComment.bind(null , postId , parentId)}>
                        <TextArea  
                            name="text"
                            label="نظر خود را وارد کنید"
                            value={text}  
                            isRequired
                            onChange={(e) => setText(e.target.value) }
                        />
                        <div className="mt-8">
                            <SubmittButton className="w-full">تایید</SubmittButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default CommentForm;