import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss'],
})
export class MapboxComponent implements OnInit {

  constructor() { }

  lugares = [
    {
      sufix:"",
      nombre:"Terreno #1",
      imagen:'./assets/terreno1/mapa1.jpg',
      sonido:'/assets/terreno1/maiz.mp3',
      prefix:"",
    },
    {
      sufix:"",
      nombre:"Terreno #2",
      imagen:'./assets/terreno1/mapa2.jpg',
      sonido:'/assets/terreno1/maiz.mp3',
      prefix:"",
    }
  ]

  procesarClick(alimento:any){
  let sonido = new Audio();
  sonido.src = alimento.sonido;
  sonido.load();
  sonido.play();
  }

  ngOnInit() {}

}
