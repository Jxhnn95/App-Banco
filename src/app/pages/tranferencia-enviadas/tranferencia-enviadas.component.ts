import { Component } from '@angular/core';

@Component({
  selector: 'app-tranferencia-enviadas',
  templateUrl: './tranferencia-enviadas.component.html',
  styleUrls: ['./tranferencia-enviadas.component.css']
})
export class TranferenciaEnviadasComponent {
  transferencias: any[]= TransferenciasEnviadas; //o = []

}
