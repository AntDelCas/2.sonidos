<<<<<<< HEAD
// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
//
// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
// })
// export class HomePage {
//
//   constructor(public navCtrl: NavController) {
//
//   }
//
// }
=======
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ANIMALES } from '../../data/data.animales';
import { Animal } from '../../interfaces/animal.interface';

import { Refresher, reorderArray } from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animales: Animal[] = [];
  audio = new Audio();
  audioTiempo: any;
  ordenando:boolean = false;

  constructor() {

    this.animales = ANIMALES.slice(0);

  }

  reproducir(animal: Animal) {

    this.pausar_audio(animal);

    if (animal.reproduciendo) {
      animal.reproduciendo = false;
      return;
    }

    console.log(animal);
    this.audio.src = animal.audio;

    this.audio.load();
    this.audio.play();

    animal.reproduciendo = true;

    this.audioTiempo = setTimeout(() => animal.reproduciendo = false, animal.duracion * 1000);

  }

  private pausar_audio(animalSel: Animal) {

    clearTimeout(this.audioTiempo);

    this.audio.pause();
    this.audio.currentTime = 0;

    for (let animal of this.animales) {
      if (animal.nombre != animalSel.nombre) {
        animal.reproduciendo = false;
      }
    }

  }s


  borrar_animal(idx:number) {
    this.animales.splice(idx, 1);
  }



  recargar_animales(refresher:Refresher) {
    console.log("Inicio del refresh");

    setTimeout(() => {
      console.log("Terminó el refresh");
      this.animales = ANIMALES.slice(0);
      refresher.complete();
    }, 1500)

  }


  reordenar_animnales(indices:any){
      console.log(indices);

      this.animales = reorderArray(this.animales, indices);

  }



}
>>>>>>> 8c4acaf658540de6fe19127efc472e3b70a64666
