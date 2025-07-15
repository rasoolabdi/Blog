import { createPostApi } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";


function useCreatePost() {
    const queryClient = useQueryClient()

    const {isPending: isCreating , mutate: createPost} = useMutation({
        mutationFn: createPostApi,
        onSuccess: (data) => {
            toast.success(data.message);
            queryClient.invalidateQueries({
                queryKey: ["posts"]
            })
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    });

    return {isCreating , createPost};
};
export default useCreatePost;