import { Produto } from './../model/produto';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ProdutoService {
  protected url: string = 'http://localhost:8090/produto/';
  constructor(private http: HttpClient) {}

  public get(nome: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }

  public getProduto(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }

  public getProdutoByName(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url);
  }
}
