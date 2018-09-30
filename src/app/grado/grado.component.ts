import { Component, OnInit } from '@angular/core';
import { GradoService } from '../services/grado.services';


import { Grado } from '../models/grado';
//import { Grado } from '../models/grado.interface';



@Component({
  selector: 'app-grado',
  templateUrl: './grado.component.html',
  styleUrls: ['./grado.component.css'],
  providers: [GradoService]
})
export class GradoComponent implements OnInit {

  grado: Grado;
  row: Array<Grado>;

  constructor(
    private _gradoService: GradoService
  ) {
    this.grado = new Grado(0, '', '');
  }

  ngOnInit() {
    this.getAllGrados();
  }

  getAllGrados() {
    this._gradoService.getPrueba()
      .subscribe(
        (result: Array<Grado>) => {
          this.row  = result;
          console.log('success', this.row);
        },
        (error: any) => {
          console.log('error', error);
        });
  }

  showConfig() {
    this._gradoService.getPrueba()
      .subscribe((data: Grado ) => this.grado = {
          id: data['idGrado'],
          nombreGrado:  data['nombreGrado'],
          descripcionGrado: data['descripcionGrado']
      });
  }

  saveGrado() {
    this._gradoService.saveGrado(this.grado)
    .subscribe(
      data => {
          this.getAllGrados();
          console.log('POST Request is successful', data);
      },
      error => {
          console.log('Error', error);
      });
  }

  saveGrado2() {
    console.log(this.grado);
  }

}
