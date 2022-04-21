import { TestBed } from '@angular/core/testing';

import { MainShowsService } from './main-shows.service';

describe('MainShowsService', () => {
  let service: MainShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
