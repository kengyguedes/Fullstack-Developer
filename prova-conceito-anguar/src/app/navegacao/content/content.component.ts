import { TotalService } from './totalService';

import { ClienteService } from './../../services/clienteService';
import { startWith, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/model/Cliente';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  stateCtrlCliente: FormControl;
  filteredStatesCliente: Observable<any[]>;
  vlrPedido: number;

  clientes: Cliente[];

  constructor(private clientService: ClienteService, private totalService: TotalService) {
    this.listarClientesApi();
    this.stateCtrlCliente = new FormControl();
    this.filteredStatesCliente = this.stateCtrlCliente.valueChanges.pipe(
      startWith(''),
      map((clientes) => this.filterStates(clientes))
    );
  }

  ngOnInit(): void {

    this.totalService.valorAtualPedido.subscribe((data) => {
      this.vlrPedido = data
      console.log("Eestou no content valor Total : ",data)
    })

  }

  private listarClientesApi(): void {
    this.clientService.getClient().subscribe(
      (data: Cliente[]) => {
        this.clientes = data;
        //data.forEach((it) => this.clientes.push(it));
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  filterStates(name: string) {
    return this.clientes;
  }


}
