import { Cliente } from './../model/Cliente';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ClienteService {
  protected url: string = 'http://localhost:8090/cliente';
  constructor(private http: HttpClient) {}

  public getClient(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }
}
