import React from 'react';
import Input from '../../../components/PageALanding/Inputs/Input';
import PageHeader from '../../../components/PageHeader';
import WorkItem from '../../../components/WorkItem';





import './Style.css'

function WorkList() {
    return (
        <div id="page-work-list" className="container">
            <PageHeader title="Estes são os empregos disponíveis.">
                <form id="search-work">


                    <Input name="function" label="Função" />

                    <Input name="week_day" label="Dia da Semana" />

                    <Input name="time" label="Hora" />

                </form>
            </PageHeader>

            <main>
                <WorkItem />
            </main>
        </div>
    );
}

export default WorkList