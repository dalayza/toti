import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnakecasePipe } from '../snakecase.pipe';

import { PersonagensComponent } from './personagens/personagens.component';
import { PersonagemComponent } from './personagem/personagem.component';
import { HomeComponent } from './home/home.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { PlanetaComponent } from './planeta/planeta.component';

@NgModule({
    declarations: [
        PersonagensComponent,
        PersonagemComponent,
        HomeComponent,
        PlanetasComponent,
        PlanetaComponent,
        SnakecasePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PersonagensComponent,
        PersonagemComponent,
        HomeComponent,
        PlanetasComponent,
        PlanetaComponent,
        SnakecasePipe
    ]
  })

  export class ComponentesModule { }
