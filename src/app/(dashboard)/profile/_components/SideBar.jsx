"use client";

import { HomeIcon } from "@heroicons/react/24/outline";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SideBarNavs from "./SideBarNavs";


function SideBar() {


    return (
        <div className="overflow-y-auto flex flex-col p-5 h-screen lg:pt-9">
            <Link 
                href="/"
                className="flex items-center gap-x-4 justify-center text-secondary-700 border-b border-b-secondary-200 pb-2 mb-6"
            >
                <HomeIcon className="w-6 h-6" />
                <span>خانه</span>
            </Link>
            <div className="overflow-y-auto flex-auto">
                <SideBarNavs />
                <div
                    onClick={""}
                    className="flex items-center mt-4 gap-x-2 rounded-2xl font-medium transition-all duration-200 text-secondary-300"
                >
                    <ArrowLeftStartOnRectangleIcon className="ml-4 w-5 h-5" />
                    <span>خروج</span>
                </div>
            </div>
        </div>
    )
};
export default SideBar;
