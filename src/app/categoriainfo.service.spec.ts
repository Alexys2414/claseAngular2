import { TestBed } from '@angular/core/testing';

import { CategoriainfoService } from './categoriainfo.service';

describe('CategoriainfoService', () => {
  let service: CategoriainfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriainfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
