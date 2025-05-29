"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ children , path }) {
    const pathname = usePathname();

    return (
        <Link
            href={path}
            className={`block py-2 hover:text-secondary-900 transition-all ease-out
                ${pathname === path ? "text-primary-900" : ""}    
            `}
        >
            {children}
        </Link>
    )
};
export default NavLink;