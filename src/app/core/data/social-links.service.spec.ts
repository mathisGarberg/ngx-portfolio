import { TestBed, inject } from '@angular/core/testing';

import { SocialLinksService } from './social-links.service';

describe('SocialLinksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialLinksService]
    });
  });

  it('should be created', inject([SocialLinksService], (service: SocialLinksService) => {
    expect(service).toBeTruthy();
  }));
});
