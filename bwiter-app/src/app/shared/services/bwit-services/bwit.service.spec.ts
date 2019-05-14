import { TestBed } from '@angular/core/testing';

import { BwitService } from './bwit.service';

describe('BwitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BwitService = TestBed.get(BwitService);
    expect(service).toBeTruthy();
  });
});
