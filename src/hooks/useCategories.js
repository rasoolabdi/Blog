import { getCategoryApi } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

export function useCategories() {
    const {isLoading , data} = useQuery({
        queryKey: ["categories"],
        queryFn: getCategoryApi,
        retry: false,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true
    });
    const { categories: rawCategories = []  } = data || {};

    const categories =  rawCategories.map((item) => ({
        label: item.title,
        value: item._id
    }));

    const transformedCategories = rawCategories.map((item) => ({
        label: item.title,
        value: item.englishTitle
    }));

    return { isLoading , categories , transformedCategories };
}