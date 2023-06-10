import { TestBed } from '@angular/core/testing';

import { TbookRepositoryService } from './tbook-repository.service';

describe('TbookRepositoryService', () => {
  let service: TbookRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TbookRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
