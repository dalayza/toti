import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any = [
    'Curso Angular',
    'Curso Nodejs'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
