import React, { useState, useContext, createContext } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const SidebarContext = createContext();

export default function Sidebar({ children, hide }) {
    const [expanded, setExpanded] = useState(true);
    return (
        <>
            {!hide && (
                <aside className="h-[89dvh] mt-3 ml-2">
                    <div
                        className={`h-full flex flex-col top-14  rounded-lg ${
                            !expanded ? "rounded-lg" : " rounded-lg"
                        }`}
                    >
                        <div className="p-4 pb-2 flex justify-between items-center">
                            <button
                                onClick={() => setExpanded((curr) => !curr)}
                                className="p-1.5 rounded-lg"
                            >
                                {expanded ? (
                                    <div className="ml-[205px]">
                                        <MdKeyboardArrowLeft className="w-7 h-7 hover:bg-neutral-800 hover:text-white rounded-lg" />
                                    </div>
                                ) : (
                                    <MdKeyboardArrowRight className="w-7 h-7 hover:bg-neutral-800 hover:text-white rounded-lg" />
                                )}
                            </button>
                        </div>
                        <SidebarContext.Provider value={{ expanded }}>
                            <ul className="flex-1 px-3">{children}</ul>
                        </SidebarContext.Provider>
                    </div>
                </aside>
            )}
        </>
    );
}

export function SidebarItem({ icon, text, active, alert, onClick }) {
    const { expanded } = useContext(SidebarContext);
    return (
        <li
            className={`relative flex items-center py-2 px-3 font-medium rounded-md cursor-pointer transition-colors group my-5 ${
                active
                    ? "bg-gradient-to-tr from-neutral-500 to-neutral-600 "
                    : "hover:bg-neutral-800 text-neutral-800 hover:text-white"
            }`}
            onClick={onClick}
        >
            <div className="ml-1 ">{icon}</div>
            <span
                className={`overflow-hidden transition-all ${
                    expanded ? "w-full ml-4" : "w-0"
                }`}
            >
                {text}
            </span>
            {/* {alert && (
                <div
                    className={`absolute right-2 w-3 h-3 rounded bg-indigo-400 ${
                        expanded ? "" : "top-2"
                    }`}
                ></div>
            )} */}

            {!expanded && (
                <div
                    className={`absolute left-full rounded-md px-2 py-2 ml-6 bg-neutral-800 border-2 border-neutral-600 text-white text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                >
                    {text}
                </div>
            )}
        </li>
    );
}
