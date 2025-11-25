import { Routes } from '@angular/router';
import { Body } from './componentes/body/body'
import { Info } from './componentes/info/info'

export const routes: Routes = [
    {path: '', component: Body},
    {path: 'info', component: Info}


];
