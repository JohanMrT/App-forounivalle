import { TestBed } from '@angular/core/testing';

import { NologinService } from './nologin.service';

describe('NologinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NologinService = TestBed.get(NologinService);
    expect(service).toBeTruthy();
  });
});
