import { Component, ViewChild } from '@angular/core';
import { SelectorNumericoComponent } from './selector-numerico/selector-numerico.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("selector2") selector2: any|SelectorNumericoComponent
  fijarSelector2(valor:number) {

    this.selector2.fijar(valor)

  }

  articulos: any[] = [
    { id: 1, producto: 'Vestido con flores estampadas',color: "Rojo",talla: "M", precio: 120000 },
    { id: 2, producto: 'Vestido con rayas negras',color:"Blanco",talla: "S", precio: 110000 },
    { id: 3, producto: 'Blusa con estampado de anime', color: "Morada",talla: "L", precio: 60000 },
    { id: 4, producto: 'Pantalon de mezcilla', color: "Azul Marino",talla: "30", precio: 100000 },
    { id: 5, producto: 'Falda Larga',color: "negro",talla: "32", precio: 90000 }
  ];


}


//En la componente AppComponent definir un arreglo con los datos de 5 artículos. Luego crear una segunda componente llamada 'listadoarticulos' que reciba mediante una propiedad el arreglo y su objetivo sea mostrar en una tabla HTML todos los datos.usando enlace de propiedades (Property Binding)