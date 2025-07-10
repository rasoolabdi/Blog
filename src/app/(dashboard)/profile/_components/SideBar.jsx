"use client";

import { HomeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SideBarNavs from "./SideBarNavs";
import ButtonIcon from "@/ui/ButtonIcon";


function SideBar({ onClose }) {


    return (
        <div className="overflow-y-auto flex flex-col p-5 h-screen lg:pt-9">
            <div className="flex items-center justify-between w-full mb-5 pb-2 border-b border-b-secondary-200">
                <Link 
                    href="/"
                        className="flex items-center gap-x-4 justify-center text-secondary-700 lg:flex-1"
                    >
                    <HomeIcon className="w-6 h-6" />
                    <span>خانه</span>
                </Link>
                <ButtonIcon
                    onClick={onClose}
                    variant="outline"
                    className="block lg:hidden border-none"
                >
                    <XMarkIcon />
                </ButtonIcon>
            </div>
            <div className="overflow-y-auto flex-auto">
                <SideBarNavs />
                <button
                    className="flex items-center mt-4 gap-x-2 rounded-2xl font-medium transition-all duration-200 text-secondary-300"
                >
                    <ArrowLeftStartOnRectangleIcon className="ml-4 w-5 h-5" />
                    <span>خروج</span>
                </button>
            </div>
        </div>
    )
};
export default SideBar;
