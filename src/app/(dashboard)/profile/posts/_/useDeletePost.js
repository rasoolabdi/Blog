import { deletePostApi } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

function useDeletePost() {
    const queryClient = useQueryClient();

    const {isPending: isDeleting , mutate: deletePost} = useMutation({
        mutationFn: deletePostApi,
        onSuccess: (data) => {
            toast.success(data.message);
            queryClient.invalidateQueries({queryKey: ["posts"]})
        },   
        onError: (error) => {
            toast.error(error?.response?.data?.message)
        }
    });
    return { isDeleting , deletePost };
};
export default useDeletePost;