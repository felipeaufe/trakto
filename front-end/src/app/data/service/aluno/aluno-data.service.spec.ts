import { TestBed } from '@angular/core/testing';

import { AlunoDataService } from './aluno-data.service';

describe('AlunoDataService', () => {
  let service: AlunoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
