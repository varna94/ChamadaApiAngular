import { ListaLivrosStatusComponent } from './lista-livros-status/lista-livros-status.component';
import { livro, books } from './lista-livros';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiLivrosService {
  readonly API: string = "https://reactnd-books-api.udacity.com/books"
  constructor(private http: HttpClient) { }


  list(): Observable<livro> {

    const token = {
      headers: new HttpHeaders().set('Authorization', 'whatever-you-want')
    };

    return this.http.get<livro>(this.API, token)
      .pipe(
        tap(console.log)
      );
  }


}
