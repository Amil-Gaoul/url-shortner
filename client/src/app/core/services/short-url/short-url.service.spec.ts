/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShortUrlService } from './short-url.service';

describe('Service: CreateShortUrl', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShortUrlService]
    });
  });

  it('should ...', inject([ShortUrlService], (service: ShortUrlService) => {
    expect(service).toBeTruthy();
  }));
});
