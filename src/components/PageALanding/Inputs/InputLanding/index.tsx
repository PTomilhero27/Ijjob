import React, { InputHTMLAttributes } from 'react';

import './Style.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string
    label: string;

}

const InputL: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return(
        <div className="input-blocks">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    );
    
}

export default InputL;