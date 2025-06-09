"use client";

function GlobalError ({ error , reset}) {
    return (
        <div className="container xl:max-w-screen-xl">
            <div className="flex justify-center pt-0">
                <div>
                    <p className="text-xl text-red-700 font-bold mb-8">
                        {error.message}
                    </p>
                    <button
                        onClick={() => reset}
                        className="items-center flex gap-x-2 text-secondary-700"
                    >
                        تلاش مجدد
                    </button>
                </div>
            </div>
        </div>
    )
};
export default GlobalError;
