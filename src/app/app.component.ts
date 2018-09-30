import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Galardon';
  public sesion: boolean;

  constructor () {
    this.sesion = true;
  }

  ngOnInit () {
    console.log('Se ha cargado el componente home.component.ts ' + this.sesion);
  }

}
