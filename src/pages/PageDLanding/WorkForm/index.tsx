import React, { useState } from 'react';
import Input from '../../../components/PageALanding/Inputs/Input';
import PageHeader from '../../../components/PageHeader';



import warningIcon from '../../../assets/img/icons/warning.svg'


import './Style.css'

import PerfilUser from '../../../components/PerfilUser';
import Textarea from '../../../components/PageALanding/Inputs/TextArea';

function WorkForm() {

    const [scheduleItems, setScheduleItems] = useState([
        { day: '', from: '', to: '' }
    ])

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { day: '', from: '', to: '' }
        ]);
    }

    return (
        <div id="page-work-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar trabalho."
                description="O primeiro Passo é preencher esse formulário de inscrição"
            />
            <main>
                <fieldset>
                    <legend> Seus Dados</legend>
                    <div className="perfil-form">
                        <PerfilUser />
                        <Input name="contato" label="Contato" placeholder="( ) _ ____-____" />
                    </div>



                    <Textarea name="bio" label="biografia" />
                </fieldset>

                <fieldset>
                    <legend> Sobre a vaga</legend>
                    <div className="sobre-vaga">
                        <Input name="function" label="Função" />
                        <Input name="cost" label="Custo do trabalho dia" placeholder="USD $" type="number" />
                    </div>
                    <Input name="Local" label="Local aproximado" />
                </fieldset>


                <fieldset>
                    <legend>Dias de Trabalho
                        <button
                            type="button"
                            onClick={addNewScheduleItem}
                        >
                            + Novo Horario
                        </button>
                    </legend>
                    {scheduleItems.map(scheduleItem => {
                        return (

                            <div key={scheduleItem.day} className="schedule-item">
                                <Input name="day" label="Data" type="date" />
                                <Input name="from" label="Das" type="time" />
                                <Input name="to" label="Até" type="time" />

                            </div>
                        );
                    })}

                </fieldset>



                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">Salvar Cadastro</button>
                </footer>
            </main>
        </div>
    );
}

export default WorkForm