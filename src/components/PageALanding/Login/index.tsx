import React from 'react';


import './Style.css'


interface LoginProps {
    title: string;
    description?: string;
    button?: string;
}

const Login: React.FC<LoginProps> = (props) => {
    return (
        <>
            <div className="login-text">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>

            {props.children}

           


        </>
    );
}

export default Login;