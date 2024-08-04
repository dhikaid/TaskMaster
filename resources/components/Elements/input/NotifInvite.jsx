import React from "react";
import { usePage } from "@inertiajs/react";
import { RxCrossCircled } from "react-icons/rx";
import { AiOutlineCheckCircle } from "react-icons/ai";

const NotifInvite = () => {
    const { teams } = usePage().props;
    return (
        <div className="relative flex items-start w-[97%] rounded-lg bg-neutral-200 py-2 mt-2 xl:mx-auto">
            <div className="text-md font-bold pl-4">
                Rafli
                <span className="font-normal"> invited you to join</span>
                <span> Romusha</span>
                <span className="font-normal"> workspace</span>
            </div>
            <div className="absolute top-2 right-2 flex mx-2 gap-2">
                <button className="bg-green-500 rounded-full text-white">
                    <AiOutlineCheckCircle className="w-6 h-6" />
                </button>
                <button className="bg-red-500 rounded-full text-white mr-4">
                    <RxCrossCircled className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default NotifInvite;
