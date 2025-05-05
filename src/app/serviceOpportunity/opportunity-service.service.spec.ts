import { TestBed } from '@angular/core/testing';

import { OpportunityServiceService } from './opportunity-service.service';

describe('OpportunityServiceService', () => {
  let service: OpportunityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpportunityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
