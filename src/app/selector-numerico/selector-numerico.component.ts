import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector-numerico',
  templateUrl: './selector-numerico.component.html',
  styleUrls: ['./selector-numerico.component.scss']
})
export class SelectorNumericoComponent {

  @Input()minimo:number = 0;
  @Input()maximo:number = 0;
   actual:number = 1;

   Constructor() {
   }

   ngOnInit() {
    this.actual = this.minimo;
   }
   incrementar(){
    if(this.actual < this.maximo)
      this.actual++;
   }

   decrementar(){
    if(this.actual > this.minimo)
      this.actual--;
   }

   fijar(valor:number){
    if(this.actual > this.minimo || this.actual < this.maximo)
      this.actual = valor;
   }
}
