import { Produto } from 'src/app/model/produto';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ListService {
  // cria um novo behaviorSubject do tipo string.
  public produto: Produto;
  private produtoSubject = new BehaviorSubject(this.produto);

  constructor() {

  }

  produtoAtual = this.produtoSubject.asObservable();

  novoProduto(produto: Produto): void {

    if (produto != null) {
      this.produtoSubject.next(produto);
    }
  }

  // selecaoProduto {
  // if ()
  // }
}
