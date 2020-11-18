import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlanetasService } from '../../services/planetas.service';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {

  id: number;
  personagem: any;

  constructor(
    private route: ActivatedRoute,
    private planetasService: PlanetasService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      // this.planetasService.getPlanetaById(this.id).subscribe(planeta => {
      //   this.planeta = planeta;
      // });
    });
  }

}
