import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  // personagens: any = [{
  //   name: 'luke skywalker',
  //   height: '172',
  //   gender: 'male',
  //   created: '2014-12-09T13:50:51.644000Z',
  //   price: '29.99',
  //   rating: '4.432'
  // },
  // {
  //   name: 'darth vader',
  //   height: '202',
  //   gender: 'male',
  //   created: '2014-12-20T13:50:51.644000Z',
  //   price: '39.99',
  //   rating: '4.834'
  // }];

  personagens: any = [];

  constructor(
    private http: HttpClient
  ) { }

  getTodos() {
    // return this.personagens;

    this.http.get('https://swapi.dev/api/people/');
  }

  getPersonagenById(id) {
    // return this.personagens;

    this.http.get(`https://swapi.dev/api/people/${ id }`);
  }
}
