import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PersonagensService } from '../../services/personagens.service';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {

  id: number;
  personagem: any;

  constructor(
    private route: ActivatedRoute,
    private personagensService: PersonagensService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      // this.personagensService.getPersonagenById(this.id).subscribe(personagen => {
      //   this.personagem = personagem;
      // });
    });
  }

}
