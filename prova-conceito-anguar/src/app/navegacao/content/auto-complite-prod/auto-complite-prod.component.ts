import { ListService } from './../lista-produtos/listService';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produtoService';
import { Produto } from 'src/app/model/produto';
import { startWith, map } from 'rxjs/operators';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { Cliente } from 'src/app/model/Cliente';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-auto-complite-prod',
  templateUrl: './auto-complite-prod.component.html',
  styleUrls: ['./auto-complite-prod.component.css'],
})
export class AutoCompliteProdComponent implements OnInit {
   stateCtrlProdutos: FormControl;
  filteredProdutos: Observable<Produto[]>;

  listProdutos: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private listProdService: ListService,
  ) {
    this.listarProdutosApi();
    this.stateCtrlProdutos = new FormControl();
    this.filteredProdutos = this.stateCtrlProdutos.valueChanges.pipe(
      startWith(''),
      map((state) => this.filterStates(state))
    );
  }

  filterStates(name: string): Produto[] {
    return this.listProdutos;
  }

  ngOnInit(): void {}

  private _filterProd(nomeProd: string): Produto[] {
    const filterValueProd = nomeProd.toLowerCase();

    return this.listProdutos.filter((nomeProduto) =>
      nomeProduto.nome.toLowerCase().includes(filterValueProd)
    );
  }

  private listarProdutosApi(): void {
    this.produtoService.getProduto().subscribe(
      (data: Produto[]) => {
        data.forEach((it) => this.listProdutos.push(it));
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  selectedOption(event): void {
    const selectedValue = event.option.value;
    console.log('Evento seleção produto', selectedValue);
    this.listProdService.novoProduto(selectedValue);

  }


}
