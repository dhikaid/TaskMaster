import React, { useEffect, useRef, useState } from "react";
import Tags from "@yaireo/tagify";
import "@yaireo/tagify/dist/tagify.css";

const TagInput = ({ value, onChange, onSearch }) => {
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
        <input
            ref={tagifyRef}
            className="tagify w-full leading-5 relative text-sm py-2 px-4 rounded bg-white border overflow-x-auto focus:outline-none"
            placeholder="Enter team members"
        />
    );
};

export default TagInput;
