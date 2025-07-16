"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import Button from "./Button";

function ConfirmDelete({ resourceName , onClose , onConfirm , disabled }) {
    return (
        <div>
            <h2 className="font-bold text-base mb-8 text-secondary-700">آیا از حذف {resourceName} مطمئن هستید ؟</h2>
            <form onSubmit={onConfirm}>
                <div className="flex justify-between items-center gap-x-16">
                    <Button
                        className="flex-1"
                        variant="outline"
                        onClick={onClose}
                        type="button"
                    >
                        <span>لغو</span>
                    </Button>
                    <Button
                        type="submit"
                        onClick={onConfirm}
                        disabled={disabled}
                        variant="danger"
                        className="flex flex-1 gap-x-2 justify-center items-center"
                    >
                        <TrashIcon className="w-5" />
                        <span>حذف</span>
                    </Button>
                </div>
            </form>
        </div>
    )
};
export default ConfirmDelete;