import React from 'react';

import './Style.css';

import feitoIcon from '../../../assets/img/icons/Feito.svg'
import { Link } from 'react-router-dom';


interface ConcluidosProps {
    title: string;
    description: string;
    button: string;
    
}

const Concluidos: React.FC<ConcluidosProps> = (props) => {
    return (

        <div id="page-concluido">
            <div className="page-concluido-conteiner">
                <img src={feitoIcon} alt="Icone Feito"/>

                <h1>{props.title}</h1>
                <p>{props.description}</p>
                
               <Link to="/"> <button className="button-concluido">{props.button}</button></Link>
            </div>

        </div>

    );
}

export default Concluidos;
