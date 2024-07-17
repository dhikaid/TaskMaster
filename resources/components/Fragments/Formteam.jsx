import React, { useRef, useState } from "react";
import InputTeam from "../Elements/input/InputTeam";
import { router, usePage } from "@inertiajs/react";
import ModalTeam from "../Elements/Modal/ModalTeam";
import { FaCircleCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";
import LabelPassword from "../Elements/input/LabelPassword";
import ButtonForm from "../Elements/button/ButtonForm";

const FormTeam = ({ isOpen, closeModal, team = { team: "", member: "" } }) => {
    const { errors, csrf, flash } = usePage().props;
    const csrfRef = useRef(csrf);
    const [isLoading, setIsLoading] = useState(false);
    const [isAlert, setIsAlert] = useState({});
    const [values, setValues] = useState({
        team: team.team,
        member: team.member,
        _token: csrfRef.current.value,
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        router.post(
            `/team/create`,
            {
                team: values.team,
                member: values.member,
                _token: csrfRef.current.value,
            },
            {
                onSuccess: (page) => {
                    setIsAlert(page.props.flash);
                    setIsLoading(false);
                    if (page.props.flash.message.status === 200) {
                        setValues({
                            team: "",
                            member: "",
                            _token: csrfRef.current.value,
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
    }

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
                <LabelPassword label="Team Name" error={errors.team}>
                    <InputTeam
                        name="team"
                        onChange={handleChange}
                        value={values.team}
                        className={`bg-gray-100 outline-none text-sm flex-1 text-start ${
                            errors.team ? "border-red-500" : ""
                        }`}
                        placeholder="Enter Team Name"
                        required
                    />
                    {errors.team && (
                        <div className="text-red-500 text-xs mt-1">
                            {errors.team}
                        </div>
                    )}
                </LabelPassword>
                <LabelPassword label="Team Members" error={errors.member}>
                    <InputTeam
                        name="member"
                        onChange={handleChange}
                        value={values.member}
                        className={`bg-gray-100 outline-none text-sm flex-1 text-start ${
                            errors.member ? "border-red-500" : ""
                        }`}
                        placeholder="Enter Team Members"
                    />
                </LabelPassword>
                <ButtonForm
                    type="submit"
                    disabled={isLoading}
                    className=" mt-4 mb-1 mx-auto justify-center items-center flex"
                >
                    {isLoading ? "Saving..." : "Save Profile"}
                </ButtonForm>
            </form>
        </ModalTeam>
    );
};

export default FormTeam;
