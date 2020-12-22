import { TestBed } from '@angular/core/testing';

import { ApiLivrosService } from './api-livros.service';

describe('ApiLivrosService', () => {
  let service: ApiLivrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLivrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
