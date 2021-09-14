import { TestBed } from '@angular/core/testing';

import { DataSource2Service } from './data-source-2.service';

describe('DataSource2Service', () => {
  let service: DataSource2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSource2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
