import { TestBed, inject } from '@angular/core/testing';

import { OverallPerformanceService } from './overall-performance.service';

describe('OverallPerformanceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OverallPerformanceService]
    });
  });

  it('should be created', inject([OverallPerformanceService], (service: OverallPerformanceService) => {
    expect(service).toBeTruthy();
  }));
});
