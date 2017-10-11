import { TestBed, inject } from '@angular/core/testing';

import { AddAssignmentService } from './add-assignment.service';

describe('AddAssignmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddAssignmentService]
    });
  });

  it('should be created', inject([AddAssignmentService], (service: AddAssignmentService) => {
    expect(service).toBeTruthy();
  }));
});
