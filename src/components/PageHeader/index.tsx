import React from 'react';

import { Link } from 'react-router-dom'

import logoImg from '../../assets/img/logo.svg'
import backIcon from '../../assets/img/icons/back.svg'

import './Style.css'

interface PageHeadeProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeadeProps> = (props) => {
    return (

        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/home">
                    <img src={backIcon} alt="icone seta voltar" />
                </Link>
                <img src={logoImg} alt="Logo Ijob" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {props.description && <p>{props.description}</p>}

                {props.children}

            </div>

        </header>

    );
}

export default PageHeader;