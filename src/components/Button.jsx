import React from "react";

const Button = ({ label, icon }) => {
    return (
        <button className="flex justify-center items-center gap-3 bg-coral-red px-7 py-4 font-montserrat rounded-full border border-coral-red text-lg text-white leading-none">
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
