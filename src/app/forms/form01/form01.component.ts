import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.scss']
})
export class Form01Component implements OnInit {


  placeholders = {
    username: 'Introduce tu usuario',
    password: 'Introduce tu contraseña'
  };

  receiveName:string = '';
  receivePass:string = '';

  recibirDatos(user, pass){
    this.receiveName = user.value;
    this.receivePass = pass.value;

  }
  constructor() { }

  ngOnInit(): void {
  }

}
