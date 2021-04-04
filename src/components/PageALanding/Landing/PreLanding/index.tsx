import React from 'react';

import logoImg from '../../../../assets/img/logo.svg';

import '../Style.css'


interface PreLandingProps {
    title?: string;
    
}

const PreLanding: React.FC<PreLandingProps> = (props) => {
    return (

        <div id="page-landing">
            <div id="page-landing-right" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Logo Ijob" />
                    <h2> {props.title ? props.title : "your online job platform"} </h2>
                </div>
            </div>


            <div id="page-landing-left" className="container">
                <div className="login-container">

                    {props.children}

                </div>
            </div>

        </div>

    );
}

export default PreLanding;