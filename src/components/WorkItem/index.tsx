import React from 'react';

import cadastrarIcon from '../../assets/img/icons/whatsapp.svg';


import './Style.css'

function WorkItem() {
    return (
        <article className="work-item">
            <header>
                <img src="https://th.bing.com/th/id/OIP.kyXzm401XT_OVfyS31SrAAHaEN?pid=ImgDet&rs=1" alt="Foto da empresa" />
                <div>
                    <strong>Nome</strong>
                    <span>Função / Local proximo</span>
                </div>
            </header>

            <p>
                descrição sobre a vaga
        </p>

            <footer>
                <p>
                    preço/dia
                <strong>USD $ 100,00</strong>
                </p>

                <button type="button">
                    <img src={cadastrarIcon} alt="Icone cadastrar" />
            Cadastrar a vaga
        </button>

            </footer>

        </article>
    );
}

export default WorkItem;
