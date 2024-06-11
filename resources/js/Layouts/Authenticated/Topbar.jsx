import { useState, useRef } from "react";
import { Link } from "@inertiajs/react";

export default function Topbar({ name }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownTarget = useRef();

    const triggerDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="flex justify-between items-center cursor-pointer p-4">
            <input
                type="text"
                className="top-search"
                placeholder="Search movie, cast, genre"
            />
            <div className="flex items-center gap-4">
                <span className="text-black text-sm font-medium">
                    Welcome, {name}
                </span>
                <div className="relative">
                    <div
                        className="outline outline-2 outline-gray-200 p-[5px] rounded-full w-[60px] cursor-pointer"
                        onClick={triggerDropdown}
                    >
                        <img
                            src="/images/avatar.png"
                            className="rounded-full object-cover w-full"
                            alt="User Avatar"
                        />
                    </div>
                    <div
                        className={`bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] transition-transform duration-200 ease-in-out ${
                            dropdownOpen ? "block" : "hidden"
                        } overflow-hidden shadow-lg`}
                        ref={dropdownTarget}
                    >
                        <a
                            href="#!"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Dashboard
                        </a>
                        <a
                            href="#!"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Settings
                        </a>
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Sign Out
                        </Link>
                    </div>
                </div>
            </div>
            <style jsx="true">
                {`
                    .top-search {
                        background-image: url("/icons/ic_search.svg");
                        background-repeat: no-repeat;
                        background-position: 10px center;
                        padding-left: 40px;
                        padding-right: 10px;
                        border: 1px solid #ddd;
                        border-radius: 9999px;
                        width: 100%;
                        max-width: 400px;
                        height: 40px;
                    }
                `}
            </style>
        </div>
    );
}
