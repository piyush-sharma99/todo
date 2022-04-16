import { TestBed } from '@angular/core/testing';

import { WelcomeDataServiceService } from './welcome-data-service.service';

describe('WelcomeDataServiceService', () => {
  let service: WelcomeDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomeDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
