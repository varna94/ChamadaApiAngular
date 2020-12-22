import { livro } from './lista-livros';
import { ApiLivrosService } from './api-livros.service';
import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private service: ApiLivrosService) { }

  ngOnInit() {
  }
}
