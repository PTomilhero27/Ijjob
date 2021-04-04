import { BrowserRouter, Route } from 'react-router-dom';


// Telas do login

import Landing from '../src/pages/PageALanding/Landing';

import Cadastrar from '../src/pages/PageALanding/Cadastrar';
import CadastroConcluidos from '../src/pages/PageALanding/Concluido/CadastroConcluido';

import ForgotPassword from '../src/pages/PageALanding/ForgotPassword';
import ConcluirForgot from '../src/pages/PageALanding/Concluido/ConcluidoForgot';


// Telas da Home

import HomePage from './pages/PageDLanding/Home/';








import WorkForm from './pages/PageDLanding/WorkForm';
import WorkList from './pages/PageDLanding/WorkList';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Landing} exact/>

            <Route path="/cadastrar" component={Cadastrar} />
            <Route path="/cadastro-concluidos" component={CadastroConcluidos} />

            <Route path="/esqueci-senha" component={ForgotPassword} />
            <Route path="/recuperar-concluido" component={ConcluirForgot} />



            <Route path="/home" component={HomePage} />



            <Route path="/worker" component={WorkForm} />
            <Route path="/give-work" component={WorkList} />

        </BrowserRouter>
    )
}

export default Routes;