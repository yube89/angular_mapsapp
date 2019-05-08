import { GmapsService } from './service/maps/gmaps.service';
import { Component } from '@angular/core';
import { Marcador } from './interfaces/marcador.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

//coordenadas de COS
  lat = 40.609;
  lng = -3.698;
  zoom = 20;

  marcadorSel: any = null;
  draggable = '1';

  // tslint:disable-next-line:variable-name
  constructor( public _ms: GmapsService ) {
    this._ms.cargarMarcadores();
  }

  clickMapa( evento ) {

    const nuevoMarcador: Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: 'Sin titulo',
      draggable: true
    };

    this._ms.insertarMarcador( nuevoMarcador );

  }

  clickMarcador(marcador: Marcador, i: number) {
    console.log(marcador, i);
    this.marcadorSel = marcador;

    if ( this.marcadorSel.draggable ) {
      this.draggable = '1';
    } else {
      this.draggable = '0';
    }
  }

  cambiarDraggable() {
    console.log(this.draggable);
    if ( this.draggable === '1' ) {
      this.marcadorSel.draggable = true;
    } else {
      this.marcadorSel.draggable = false;
    }
  }


  dragEndMarcador( marcador: Marcador, evento ) {
    // console.log(marcador, evento);
    const lat = evento.coords.lat;
    const lng = evento.coords.lng;

    marcador.lat = lat;
    marcador.lng = lng;

    this._ms.guardarMarcadores();

  }

}
