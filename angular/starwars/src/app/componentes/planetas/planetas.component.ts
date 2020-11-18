import { Component, OnInit } from '@angular/core';

import { PlanetasService } from 'src/app/services/planetas.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  planetas: any = [];

  constructor(
    planetasServices: PlanetasService
  ) {
    this.planetas = planetasServices.getTodos();

    // planetasServices.getTodos().subscribe(planetas => this.planetas = planetas['results']);
  }

  ngOnInit(): void {
  }

}
