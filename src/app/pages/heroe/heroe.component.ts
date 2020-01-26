import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  //aqui se crea una nueva propiedad
  heroe: HeroeModel = new HeroeModel();
//---fin de la propiedad-------
  constructor() { }

  ngOnInit() {
  }

  guardar(form:NgForm){

    if(form.invalid){
     console.log("Formulario no valido");
      return;
    }

    console.log(form);
    console.log(this.heroe);
  }

}
