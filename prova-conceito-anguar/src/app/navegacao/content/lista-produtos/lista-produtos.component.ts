import { TotalService } from './../totalService';
import { ListService } from './listService';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css'],
})
export class ListaProdutosComponent implements OnInit {
  produto: Produto;
  vlrQtProd: number;
  listProd: Produto[] = [];
  aux: number = 0;

  constructor(
    private sevice: ListService,
    private totalService: TotalService
  ) {}

  ngOnInit(): void {
    this.sevice.produtoAtual.subscribe((dataProduct) => {
      if (dataProduct != null) {
        this.listProd.push(dataProduct);
        this.calculaTotal();
      }
    });
    console.log('Estou no onInit da Lista');
  }

  calculaTotal(): void {
    this.listProd.forEach((produto) => {
      this.aux += produto.precoUnitario;
    });
    console.log('Valor do meu Aux', this.aux);
    this.totalService.atualizaValor(this.aux);
  }

  limparCarrinho(): void {
    this.listProd = null;
  }
}
