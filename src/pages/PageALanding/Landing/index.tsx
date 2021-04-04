import React from 'react';


import PreLanding from '../../../components/PageALanding/Landing/PreLanding';
import Login from '../../../components/PageALanding/Login';
import InputL from '../../../components/PageALanding/Inputs/InputLanding';
import CheckBox from '../../../components/PageALanding/Inputs/CheckBox';

import purpleHeartIcon from '../../../assets/img/icons/purple-heart.svg';
import { Link } from 'react-router-dom';



import './Style.css';




function Landing() {
    return (
        <PreLanding >

            <Login
                button="Entrar"
                title="Fazer Login"
            >

                <form >

                    <InputL
                        name="email"
                        label=""
                        placeholder="Email"
                        type="email"
                    />
                    <InputL
                        name="senha"
                        label=""
                        placeholder="Senha"
                        type="password"
                        id="input-blockss"
                    />


                    <div className="login-lembrar">
                        <CheckBox name="check" label="Lembrar-me" />
                        <Link to="/esqueci-senha">Esqueci minha senha</Link>
                    </div>

                    <button type="button" className="Button" disabled> <Link to="/home" >Entrar </Link> </button>

                    <div className="login-cadastrar">
                        <p>
                            Não tem conta? <br />
                            <Link to="/cadastrar" className="cadastre-se">Cadastre-se</Link>
                        </p>
                        <span>é de Graça <img src={purpleHeartIcon} alt="Coração roxo Icone" /></span>
                    </div>
                </form>



            </Login>
        </PreLanding>

    );

}

export default Landing;
