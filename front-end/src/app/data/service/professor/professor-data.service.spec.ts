import { TestBed } from '@angular/core/testing';

import { ProfessorDataService } from './professor-data.service';

describe('ProfessorDataService', () => {
  let service: ProfessorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
