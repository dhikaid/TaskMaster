import React from "react";

const InputProfile2 = ({ label, error, children }) => (
    <div className="formgroup w-full sm:w-10/12 max-auto mx-auto">
        <div className="mb-3">
            <label className="block font-semibold text-slate-900 text-start pl-2">
                {label}
            </label>
            <div className="flex items-center pl-2">
                {React.Children.map(children, (child) => {
                    if (React.isValidElement(child)) {
                        if (child.type === "textarea") {
                            return React.cloneElement(child, {
                                readOnly: true,
                                value: child.props.value,
                            });
                        }
                        return child;
                    }
                    return null;
                })}
            </div>
            {error && (
                <div className="text-red-500 text-xs mt-1 text-start">
                    {error}
                </div>
            )}
        </div>
    </div>
);

export default InputProfile2;
