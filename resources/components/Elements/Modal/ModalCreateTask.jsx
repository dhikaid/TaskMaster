import React, { useRef, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { usePage } from "@inertiajs/react";
import FormCreateTask from "../../Fragments/FormCreateTask";

const ModalCreateTask = ({ isOpen, onClose }) => {
    const { csrf } = usePage().props;
    const csrfRef = useRef(csrf);
    const [isLoading, setIsLoading] = useState(false);
    const [isAlert, setIsAlert] = useState({});
    const [values, setValues] = useState({
        title: "",
        members: [],
        deadline: "",
        _token: csrf,
    });

    const handleClose = () => {
        onClose();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        const csrfToken = csrfRef.current;
        router.post(
            `/team/create`,
            {
                ...values,
                member: values.members,
                _token: csrfToken,
            },
            {
                onSuccess: (page) => {
                    setIsAlert(page.props.flash);
                    setIsLoading(false);
                    if (page.props.flash.message.status === 200) {
                        setValues({
                            title: "",
                            members: [],
                            deadline: "",
                            _token: csrf,
                        });
                        setTimeout(() => {
                            handleClose();
                        }, 2000);
                    }
                },
                onError: () => {
                    setIsLoading(false);
                },
            }
        );
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-lg w-11/12 max-w-lg relative p-4">
                <button
                    className="absolute top-3 right-3 text-neutral-800 hover:text-neutral-900 m-2"
                    onClick={handleClose}
                >
                    <AiOutlineCloseCircle className="w-[32px] h-[32px]" />
                </button>
                <FormCreateTask
                    values={values}
                    setValues={setValues}
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                    errors={usePage().props.errors}
                />
            </div>
        </div>
    );
};

export default ModalCreateTask;
