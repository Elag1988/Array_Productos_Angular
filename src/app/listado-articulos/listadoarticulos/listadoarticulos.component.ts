import { Component, Input,  } from '@angular/core';

@Component({
  selector: 'app-listadoarticulos',
  templateUrl: './listadoarticulos.component.html',
  styleUrls: ['./listadoarticulos.component.scss']
})
export class ListadoarticulosComponent {

  @Input() articulos: any[] = [];

}
