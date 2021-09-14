import { TestBed } from '@angular/core/testing';

import { DemoImageSourceService } from './demo-image-source.service';

describe('DemoImageSourceService', () => {
  let service: DemoImageSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoImageSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
