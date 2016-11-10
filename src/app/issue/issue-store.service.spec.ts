/* tslint:disable:no-unused-variable */
import { Http, BaseRequestOptions, HttpModule } from '@angular/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { IssueStoreService } from './issue-store.service';
import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';

describe('Service: IssueStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IssueStoreService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('should ...', inject([IssueStoreService], (service: IssueStoreService) => {
    expect(service).toBeTruthy();
  }));
});
