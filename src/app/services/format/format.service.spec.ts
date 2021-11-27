import { TestBed } from '@angular/core/testing';

import { FormatService } from './format.service';

describe('RequestFormatService', () => {
  let service: FormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
