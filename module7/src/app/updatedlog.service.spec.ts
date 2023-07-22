import { TestBed } from '@angular/core/testing';

import { UpdatedlogService } from './updatedlog.service';

describe('UpdatedlogService', () => {
  let service: UpdatedlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatedlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
