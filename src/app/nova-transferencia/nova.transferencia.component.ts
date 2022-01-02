import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';

@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova.transferencia.component.scss']

})
export class NovaTransferenciaComponent{
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router){}

  transferir(){
    const valorEmitido: Transferencia = {valor: this.valor, destino: this.destino};
    this.service.adicionar(valorEmitido).subscribe(resultado => {
      this.limparCampos();
      this.router.navigateByUrl("extrato");
    }, (error) => {
      console.log("erro na requisicao");
    });
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}
