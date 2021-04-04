import React from 'react'
import { Link } from 'react-router-dom';

import backIcon from '../../../assets/img/icons/back.svg';

import InputL from '../../../components/PageALanding/Inputs/InputLanding';
import PreLandingTwo from '../../../components/PageALanding/Landing/PreLandingTwo';
import Login from '../../../components/PageALanding/Login';




import './Style.css';






function ForgotPassword() {
    return (
        <PreLandingTwo >
            <div className="voltar">
                <Link to="/">
                    <img src={backIcon} alt="" />
                </Link>
            </div>
            <Login
                title="Eita, esqueceu
                sua senha?"
                description="Não esquenta, vamos dar um jeito nisso."
            >
                <InputL name="email" label="" placeholder="E-mail" />

               
                    <Link to="/recuperar-concluido" className="button-forgots">  
                        <p> Enviar </p> 
                    </Link>
              


            </Login>
        </PreLandingTwo>
    );

}

export default ForgotPassword;
