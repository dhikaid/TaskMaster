import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import LabelPassword from "../Elements/input/LabelPassword";
import TagInput from "../Elements/input/TagInput";
import InputCreateTask from "../Elements/input/InputCreateTask";
import ButtonForm from "../Elements/button/ButtonForm";

const FormCreateTask = ({
    values,
    setValues,
    handleSubmit,
    isLoading,
    errors,
}) => {
    const [tags, setTags] = useState([]);
    const [isAlert, setIsAlert] = useState({});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleTagChange = (event) => {
        const members = event.detail.tagify.value;
        setValues({ ...values, members });
        setTags([...tags, members]);
    };

    const handleSearch = async (event) => {
        const query = event.detail.value;
        if (query) {
            const response = await fetch(`/member/search?query=${query}`);
            const result = await response.json();
            if (result.status === 200) {
                event.detail.tagify.settings.whitelist = result.data.map(
                    (user) => ({
                        value: user.username,
                    })
                );
                event.detail.tagify.dropdown.show.call(
                    event.detail.tagify,
                    query
                );
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <div className="text-xl font-bold mb-6 text-neutral-800">
                Create Task
            </div>
            {isAlert.message && (
                <div
                    className={`bg-gray-100 border-t-4 max-w-lg mx-auto ${
                        isAlert.message.status === 200
                            ? "border-green-500"
                            : "border-red-500"
                    } border-1 rounded-lg p-1 mb-4 flex items-center`}
                >
                    <div className="flex items-center justify-center rounded-l-lg mr-2 px-2">
                        {isAlert.message.status === 200 ? (
                            <FaCircleCheck className="text-3xl text-green-500" />
                        ) : (
                            <MdError className="text-4xl text-red-500" />
                        )}
                    </div>
                    <div>
                        <h2
                            className={`font-bold text-md text-left ${
                                isAlert.message.status === 200
                                    ? "text-green-500"
                                    : "text-red-500"
                            }`}
                        >
                            {isAlert.message.status === 200
                                ? "Success!"
                                : "Error!"}
                        </h2>
                        <p
                            className={`text-sm text-start ${
                                isAlert.message.status === 200
                                    ? "text-green-500"
                                    : "text-red-500"
                            }`}
                        >
                            {isAlert.message.message}
                        </p>
                    </div>
                </div>
            )}
            <LabelPassword label="Task" error={errors.title}>
                <InputCreateTask
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    required
                    placeholder={"Name task"}
                />
            </LabelPassword>
            <TagInput
                label="Team Members"
                value={tags}
                onChange={handleTagChange}
                onSearch={handleSearch}
                error={errors.members}
            />
            <LabelPassword label="Deadline" error={errors.deadline}>
                <InputCreateTask
                    type="date"
                    name="deadline"
                    value={values.deadline}
                    onChange={handleChange}
                    className={"w-full"}
                />
            </LabelPassword>
            <div className="flex">
                <ButtonForm
                    type="submit"
                    disabled={isLoading}
                    isLoading={isLoading}
                    className="mt-4 mb-1 mx-auto justify-center items-center flex"
                >
                    {isLoading ? "Creating..." : "Create Task"}
                </ButtonForm>
            </div>
        </form>
    );
};

export default FormCreateTask;
