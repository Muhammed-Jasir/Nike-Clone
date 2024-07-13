import React from "react";

const Button = ({ label, icon, backgroundColor, textColor, borderColor }) => {
    return (
        <button
            className={`flex justify-center items-center gap-3 px-7 py-4 font-montserrat text-lg border rounded-full leading-none
            ${
                backgroundColor
                    ? `${borderColor} ${textColor} ${backgroundColor}`
                    : "border-coral-red  text-white bg-coral-red"
            }`}
        >
            {label}
            {icon && (
                <img
                    src={icon}
                    alt={label + "button"}
                    className="rounded-full ml-2 w-5 h-5"
                />
            )}
        </button>
    );
};

export default Button;
