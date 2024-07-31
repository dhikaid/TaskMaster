import React, { useState } from "react";
import { usePage, router } from "@inertiajs/react";
import ModalTeam from "../Elements/Modal/ModalTeam";
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import LabelPassword from "../Elements/input/LabelPassword";
import ButtonForm from "../Elements/button/ButtonForm";
import TagInput from "../Elements/input/TagInput";

const FormTeam = ({ isOpen, closeModal, team = { team: "", member: [] } }) => {
    const { errors, csrf } = usePage().props;
    const [isLoading, setIsLoading] = useState(false);
    const [isAlert, setIsAlert] = useState({});
    const [values, setValues] = useState({
        team: team.team,
        member: [...team.member],
        _token: csrf,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const [tags, setTags] = useState([]);

    const handleTagChange = (e) => {
        let members = e.detail.tagify.value.map((item) => item.value);
        tags.push(members);
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

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        router.post(
            `/team/create`,
            {
                ...values,
                member: tags.pop(), // Send as an array of strings
            },
            {
                onSuccess: (page) => {
                    setIsAlert(page.props.flash);
                    setIsLoading(false);
                    if (page.props.flash.message.status === 200) {
                        setValues({
                            team: "",
                            member: [],
                            _token: csrf,
                        });
                        setTimeout(() => {
                            closeModal();
                        }, 2000);
                    }
                },
                onError: () => {
                    setIsLoading(false);
                },
            }
        );
    };

    return (
        <ModalTeam isOpen={isOpen} onClose={closeModal} hasError={errors}>
            <div className="text-xl font-bold mb-7 text-neutral-800">
                Create Team
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

            <form onSubmit={handleSubmit}>
                <input type="hidden" name="_token" value={csrf} />
                <LabelPassword label="Team Name" error={errors.team}>
                    <input
                        name="team"
                        onChange={handleChange}
                        value={values.team}
                        className="bg-gray-100 outline-none text-sm flex-1 text-start py-2 px-2"
                        placeholder="Enter Team Name"
                        required
                    />
                </LabelPassword>

                <div className="mb-4">
                    <TagInput
                        label="Team Members"
                        value={tags}
                        onChange={handleTagChange}
                        onSearch={handleSearch}
                        error={errors.member}
                    />
                </div>

                <div className="flex">
                    <ButtonForm
                        type="submit"
                        disabled={isLoading}
                        isLoading={isLoading}
                        className="mt-4 mb-1 mx-auto justify-center items-center flex"
                    >
                        {isLoading ? "Creating..." : "Create Team"}
                    </ButtonForm>
                </div>
            </form>
        </ModalTeam>
    );
};

export default FormTeam;
