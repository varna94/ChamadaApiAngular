import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLivrosStatusComponent } from './lista-livros-status.component';

describe('ListaLivrosStatusComponent', () => {
  let component: ListaLivrosStatusComponent;
  let fixture: ComponentFixture<ListaLivrosStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaLivrosStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLivrosStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
