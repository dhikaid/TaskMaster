import React, { useEffect, useRef, useState } from "react";
import Tags from "@yaireo/tagify";
import "@yaireo/tagify/dist/tagify.css";

const TagInput = ({ label, value, onChange, onSearch, error }) => {
    const tagifyRef = useRef();
    const [tagifyInstance, setTagifyInstance] = useState(null);

    useEffect(() => {
        const tagify = new Tags(tagifyRef.current, {
            enforceWhitelist: true,
            whitelist: [],
            dropdown: {
                enabled: 1,
                fuzzySearch: true,
            },
        });

        setTagifyInstance(tagify);

        tagify.on("input", onSearch);
        tagify.on("add", onChange);
        tagify.on("remove", onChange);

        return () => {
            tagify.destroy();
        };
    }, [onChange, onSearch]);

    useEffect(() => {
        if (tagifyInstance) {
            tagifyInstance.settings.whitelist = value.map((user) => ({
                value: user.username,
            }));
            tagifyInstance.removeAllTags();
            tagifyInstance.addTags(value.map((v) => ({ value: v.username })));
        }
    }, [value, tagifyInstance]);

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-slate-800 pl-1">
                {label}
            </label>
            <div className="flex items-center rounded-xl bg-gray-100 border focus-within:border-blue-500 hover:border-blue-500 shadow-sm focus-within:border-[1px]">
                <input
                    ref={tagifyRef}
                    className="tagify leading-5 relative text-sm rounded-lg overflow-x-auto focus:outline-none w-full text-slate-500 py-[2px]"
                    placeholder="Enter team members"
                />
            </div>
            {error && <span className="text-red-500 text-xs">{error}</span>}
        </div>
    );
};

export default TagInput;
