import { Component } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personaje';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent   {

  //ATRIBUTOS==VARIABLES
   nombre:String ="juan";
   edad:number= 24;
    
   numeros:number[]=[
    1,2,3,4,5,6,7,8,9,10
   ];

   /*personajes:any[]=[
    'https://firebasestorage.googleapis.com/v0/b/livtiendatcc.appspot.com/o/PJTAS%2Fdonna.jpg?alt=media&token=ea952930-f932-4e41-a63d-87cc16c86628','https://firebasestorage.googleapis.com/v0/b/livtiendatcc.appspot.com/o/PJTAS%2Fharvey.jpg?alt=media&token=b7f4abe1-0af1-47a1-a315-4768e6dd7635','https://firebasestorage.googleapis.com/v0/b/livtiendatcc.appspot.com/o/PJTAS%2Fjessica.jpeg?alt=media&token=e9b9d8c8-bfe4-407b-9269-c331d0e94859','https://firebasestorage.googleapis.com/v0/b/livtiendatcc.appspot.com/o/PJTAS%2Fluis.webp?alt=media&token=4e31d6c8-f07e-4ff1-872f-1c379351a917','https://firebasestorage.googleapis.com/v0/b/livtiendatcc.appspot.com/o/PJTAS%2Fmike.webp?alt=media&token=b22b15de-b4b9-4ec6-9195-05af95e2d9f5'
   ]*/

   personajes:Personaje[]=[
    {'foto':'https://firebasestorage.googleapis.com/v0/b/livtiendatcc.appspot.com/o/PJTAS%2Fdonna.jpg?alt=media&token=ea952930-f932-4e41-a63d-87cc16c86628','nombre':'Donna','edad':40},{'foto':'https://firebasestorage.googleapis.com/v0/b/livtiendatcc.appspot.com/o/PJTAS%2Fharvey.jpg?alt=media&token=b7f4abe1-0af1-47a1-a315-4768e6dd7635','nombre':'Havey','edad':42},{'foto':'https://firebasestorage.googleapis.com/v0/b/livtiendatcc.appspot.com/o/PJTAS%2Fjessica.jpeg?alt=media&token=e9b9d8c8-bfe4-407b-9269-c331d0e94859','nombre':'Jessica','edad':43},
    {'foto':'https://firebasestorage.googleapis.com/v0/b/livtiendatcc.appspot.com/o/PJTAS%2Fluis.webp?alt=media&token=4e31d6c8-f07e-4ff1-872f-1c379351a917','nombre':'Louis','edad':45},{'foto':'https://firebasestorage.googleapis.com/v0/b/livtiendatcc.appspot.com/o/PJTAS%2Fmike.webp?alt=media&token=b22b15de-b4b9-4ec6-9195-05af95e2d9f5','nombre':'Make','edad':28}
   ]

   img: any='https://encolombia.com/wp-content/uploads/2021/12/Que-es-paisaje.jpg';

  constructor() { }

}
