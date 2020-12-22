import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { livro, books } from './../lista-livros';
import { ApiLivrosService } from './../api-livros.service';
import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-lista-livros-status',
  templateUrl: './lista-livros-status.component.html',
  styleUrls: ['./lista-livros-status.component.scss']
})
export class ListaLivrosStatusComponent implements OnInit {

  livrosLista: books[] = [];
  read: books[] = [];
  reading: books[] = [];
  wantToRead: books[] = [];
  constructor(private service: ApiLivrosService, private http: HttpClient) { }

  ngOnInit(): void {
    this.livros();
    this.readBook(this.livrosLista);
    // this.wantToReadBook(this.livros());
    // this.readingBook(this.livros());
  }

  livros() {
    // console.log(this.service.list().subscribe(livro => console.log(livro.books)));
    this.service.list().subscribe(livro => this.livrosLista = livro.books);
    console.log(this.livrosLista);
    console.log(this.livrosLista.find(item => item.shelf == 'read'));
    return this.service.list().subscribe(livro => this.livrosLista = livro.books);

  }
  readBook(value: books[]) {
    console.log(value.find(item => item.shelf == 'read'));
    return value.find(item => item.shelf == 'read');

  }
  wantToReadBook(val: books[]) {

    val.forEach(element => {
      if (element.shelf == 'read') {
        this.wantToRead.push(element);
      }
    });
    return this.wantToRead;
  }
  readingBook(v: books[]) {

    v.forEach(element => {
      if (element.shelf == 'read') {
        this.reading.push(element);
      }
    });
    return this.reading;
  }

}
