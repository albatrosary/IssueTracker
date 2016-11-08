/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IssueStoreService } from './issue-store.service';

describe('Service: IssueStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssueStoreService]
    });
  });

  it('should ...', inject([IssueStoreService], (service: IssueStoreService) => {
    expect(service).toBeTruthy();
  }));
});
