import { TestBed } from '@angular/core/testing';

import { CurrentStatisticalService } from './current-statistical.service';

describe('CurrentStatisticalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentStatisticalService = TestBed.get(CurrentStatisticalService);
    expect(service).toBeTruthy();
  });
});
