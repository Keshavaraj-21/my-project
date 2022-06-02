import { TestBed } from '@angular/core/testing';

import { ToastarserviceService } from './toastarservice.service';

describe('ToastarserviceService', () => {
  let service: ToastarserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastarserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
