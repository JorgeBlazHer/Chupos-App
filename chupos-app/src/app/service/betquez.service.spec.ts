import { TestBed, async, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { BetquezService } from './betquez.service';

describe('BetquezService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
    providers: [
      BetquezService
    ]
  }));

  it('should be created', () => {
    const service: BetquezService = TestBed.get(BetquezService);
    expect(service).toBeTruthy();
  });
});
