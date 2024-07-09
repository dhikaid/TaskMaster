import React, { useState, useContext, createContext } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true);
    return (
        <>
            <aside className="h-screen">
                <div
                    className={`h-full flex flex-col top-14  border-r-2 border-indigo-100 ${
                        !expanded ? "rounded-lg" : ""
                    }`}
                >
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <button
                            onClick={() => setExpanded((curr) => !curr)}
                            className="p-1.5 rounded-lg"
                        >
                            {expanded ? (
                                <div className="ml-[205px]">
                                    <MdKeyboardArrowLeft className="w-7 h-7 hover:bg-indigo-50 text-indigo-800 rounded-lg" />
                                </div>
                            ) : (
                                <MdKeyboardArrowRight className="w-7 h-7" />
                            )}
                        </button>
                    </div>
                    <SidebarContext.Provider value={{ expanded }}>
                        <ul className="flex-1 px-3">{children}</ul>
                    </SidebarContext.Provider>
                </div>
            </aside>
        </>
    );
}

export function SidebarItem({ icon, text, active, alert, onClick }) {
    const { expanded } = useContext(SidebarContext);
    return (
        <li
            className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
                active
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                    : "hover:bg-indigo-50 text-gray-600"
            }`}
            onClick={onClick}
        >
            <div className="ml-1">{icon}</div>
            <span
                className={`overflow-hidden transition-all ${
                    expanded ? "w-full ml-4" : "w-0"
                }`}
            >
                {text}
            </span>
            {alert && (
                <div
                    className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                        expanded ? "" : "top-2"
                    }`}
                ></div>
            )}

            {!expanded && (
                <div
                    className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
                >
                    {text}
                </div>
            )}
        </li>
    );
}
