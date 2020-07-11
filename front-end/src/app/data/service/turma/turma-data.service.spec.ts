import { TestBed } from '@angular/core/testing';

import { TurmaDataService } from './turma-data.service';

describe('TurmaDataService', () => {
  let service: TurmaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurmaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
