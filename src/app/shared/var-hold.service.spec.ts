import { TestBed, inject } from '@angular/core/testing';

import { VarHoldService } from './var-hold.service';

describe('VarHoldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VarHoldService]
    });
  });

  it('should be created', inject([VarHoldService], (service: VarHoldService) => {
    expect(service).toBeTruthy();
  }));
});
