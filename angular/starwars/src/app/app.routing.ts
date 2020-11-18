import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { PersonagemComponent } from './componentes/personagem/personagem.component';
import { PersonagensComponent } from './componentes/personagens/personagens.component';
import { PlanetasComponent } from './componentes/planetas/planetas.component';
import { PlanetaComponent } from './componentes/planeta/planeta.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'personagens', component: PersonagensComponent},
    { path: 'personagens/:id', component: PersonagemComponent},
    { path: 'planetas', component: PlanetasComponent},
    { path: 'planetas/:id', component: PlanetaComponent}
];
export const rounting: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
