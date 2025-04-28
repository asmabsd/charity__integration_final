import { TestBed } from '@angular/core/testing';

import { SponsoringService } from './sponsoring.service';

describe('SponsoringService', () => {
  let service: SponsoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SponsoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
