"use client";

import { createComment } from "@/lib/actions";
import SubmittButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

const initialState = {
    error: "",
    message: ""
}

function CommentForm({ postId , parentId , onClose }) {
    const [text , setText] = useState("");
    const [state , formAction] = useActionState(createComment , initialState);

    useEffect(() => {
        if(state?.message) {
            toast.success(state.message);
            onClose();
        }
        if(state?.error) {
            toast.error(state.error);
        }
    } , [state])

    return (
        <div>
            <div className="flex justify-center mt-4">
                <div className="max-w-lg w-full">
                    <form 
                        className="space-y-7" 
                        // action={createComment.bind(null , postId , parentId)}
                        action={async(formData) => {
                            await formAction({ formData , postId , parentId })
                        }}
                    >
                        <TextArea  
                            name="text"
                            label="نظر خود را وارد کنید"
                            value={text}  
                            isRequired
                            onChange={(e) => setText(e.target.value) }
                        />
                        <div className="mt-8">
                            <SubmittButton>تایید</SubmittButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default CommentForm;