import React from "react";

const Input = ({ icon, text, name, id, value, type, placeholder, event }) => {
    return (
        <div className="input">
            <label htmlFor={id}>{text}</label>
            <div className="input__container">
                <span className={`input__span`}>{icon}</span>
                <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => event(e)}
                />
            </div>
        </div>
    );
};

export default Input;
