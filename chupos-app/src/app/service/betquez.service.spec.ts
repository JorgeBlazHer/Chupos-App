import { TestBed } from '@angular/core/testing';

import { BetquezService } from './betquez.service';

describe('BetquezService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BetquezService = TestBed.get(BetquezService);
    expect(service).toBeTruthy();
  });
});
