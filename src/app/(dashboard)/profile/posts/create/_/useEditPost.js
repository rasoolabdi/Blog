import { editPostApi } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";


function useEditPost(id) {
    const queryClient = useQueryClient();

    const {isPending: isUpdating , mutate: updatePost} = useMutation({
        mutationFn: editPostApi,
        onSuccess: (data) => {
            toast.success(data.message);
            queryClient.invalidateQueries({queryKey: ["posts"]})
        },
        onError: (error) => {
            console.log(error)
            toast.error(error?.response?.data?.message);
        }
    });
    return {isUpdating , updatePost};
}
export default useEditPost;