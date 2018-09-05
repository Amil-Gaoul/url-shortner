/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreateShortUrlService } from './create-short-url.service';

describe('Service: CreateShortUrl', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateShortUrlService]
    });
  });

  it('should ...', inject([CreateShortUrlService], (service: CreateShortUrlService) => {
    expect(service).toBeTruthy();
  }));
});
