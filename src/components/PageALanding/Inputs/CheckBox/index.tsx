import React, { InputHTMLAttributes } from 'react';

import './Style.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label: string;

}

const CheckBox: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-check">

            <input type="checkbox" id={name} {...rest} />
            <label htmlFor={name}> {label}</label>
        </div>
    );

}

export default CheckBox;