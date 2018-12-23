import { TestBed } from '@angular/core/testing';

import { ArenalesService } from './arenales.service';

describe('ArenalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArenalesService = TestBed.get(ArenalesService);
    expect(service).toBeTruthy();
  });
});
