"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Search() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const search = e.target.search;
        const searchValue = search.value;

        const newParams = new URLSearchParams(searchParams.toString());
        if(searchValue) {
            newParams.set("search" , searchValue);
        }
        else {
            newParams.delete("search");
        }

        // router.push(`${pathname}?${newParams.toString()}` , { scroll: false });
        router.push(pathname + "?" + newParams.toString() , { scroll: false });
    };

    return (
        <form className="relative" onSubmit={formSubmitHandler}>
            <input 
                type="text"
                placeholder="جستجو ..."
                autoComplete="off"
                name="search"
                className="textField__input py-3 full h-full items-center"
            />
            <button
                type="submit"
                className="absolute left-0 top-0 ml-3 flex h-full items-center"
            >
                <MagnifyingGlassIcon className="h-4 text-secondary-400" />
            </button>
        </form>
    )
};
export default Search;