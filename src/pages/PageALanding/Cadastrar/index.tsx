import React from 'react';

import backIcon from '../../../assets/img/icons/back.svg'
import { Link } from 'react-router-dom';
import InputL from '../../../components/PageALanding/Inputs/InputLanding';
import PreLandingTwo from '../../../components/PageALanding/Landing/PreLandingTwo';
import Login from '../../../components/PageALanding/Login';


import './Style.css';








function Cadastrar() {
    return (

        <PreLandingTwo >
            <div className="voltar">
                <Link to="/">
                    <img src={backIcon} alt="" />
                </Link>
            </div>

            <Login
                button="Cadastro"
                title="Cadastro"
                description="Preencha os dados abaixo
                para começar."
            >
                <form action="">
                    <InputL name="nome" label="" placeholder="Nome" />
                    <InputL name="sobrenome" label="" placeholder="Sobrenome" id="" />
                    <InputL name="email" label="" placeholder="Email" />
                    <InputL name="senha" label="" placeholder="Senha" id="input-blockss" />


                    <button type="button" className="button-cadastro" disabled> Concluir cadastro</button>
                </form>



            </Login>
        </PreLandingTwo>

    );

}

export default Cadastrar;