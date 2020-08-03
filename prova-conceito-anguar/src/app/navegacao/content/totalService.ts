import { Produto } from 'src/app/model/produto';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TotalService {
  // cria um novo behaviorSubject do tipo string.
  public vlrTotal: number;
  private vlrTotalSubject = new BehaviorSubject(this.vlrTotal);

  constructor() {}

  valorAtualPedido = this.vlrTotalSubject.asObservable();

  atualizaValor(totalPed: number): void {
    this.vlrTotalSubject.next(totalPed);
  }
}
