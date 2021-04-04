import React from 'react';

import logoImg from '../../../assets/img/logo.svg';
import landingImg from '../../../assets/img/landing.svg';
import studyIcon from '../../../assets/img/icons/study.svg';
import giveWorkIcon from '../../../assets/img/icons/give-classes.svg';
import purpleHeartIcon from '../../../assets/img/icons/purple-heart.svg';
import { Link } from 'react-router-dom';


import './Style.css';

import MenuLateral from '../../../components/MenuLateral';


function Home() {
    return (
        <div id="page-home">


            <div id="page-home-content" className="container">

                <div id="user">
                    <MenuLateral />
                  


                </div>


                <div className="logo-container">
                    <img src={logoImg} alt="Logo Ijob" />
                    <h2>Sua plataforma de Trabalho online</h2>
                </div>

                <img src={landingImg} alt="Imagem Landing" className="hero-image" />





                <div className="buttons-container">
                    <Link to="/worker" className="work">
                        <img src={studyIcon} alt="trabalhar" />
                        Trabalhar
                    </Link>
                    <Link to="/give-work" className="give-work">
                        <img src={giveWorkIcon} alt="trabalhar" />
                        Dar Trabalho
                    </Link>
                </div>
                <span className="total-connections">
                    Total de 200 Conexões ja realizadas <img src={purpleHeartIcon} alt="Purple Heart Icon" />
                </span>
            </div>
        </div>
    );
}

export default Home;