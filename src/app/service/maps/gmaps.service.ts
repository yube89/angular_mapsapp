import { Marcador } from './../../interfaces/marcador.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GmapsService {

  marcadores: Marcador[] = [];

  constructor() {

    const nuevoMarcador: Marcador = {
      lat: 9.976052,
      lng: -84.006836,
      titulo: 'Iglesia de Coronado',
      draggable: true
    };

    this.marcadores.push( nuevoMarcador );

  }

  insertarMarcador( marcador: Marcador ) {
    this.marcadores.push(marcador);
    this.guardarMarcadores();
  }

  borrarMarcador( idx: number ) {
    this.marcadores.splice(idx, 1);
    this.guardarMarcadores();
  }


  guardarMarcadores() {
    localStorage.setItem('marcadores',  JSON.stringify( this.marcadores ) );
  }

  cargarMarcadores() {

    if ( localStorage.getItem('marcadores') ) {
      this.marcadores = JSON.parse( localStorage.getItem('marcadores'));
    } else {
      this.marcadores = [];
    }

  }
}
