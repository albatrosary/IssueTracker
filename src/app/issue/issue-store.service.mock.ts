import { IssueStoreService } from './issue-store.service';
import { Issue } from './issue';
import { Observable } from 'rxjs';

export class MockIssueStoreService extends IssueStoreService {
  public delete(index: number): Promise<Issue[]> {
    return Observable
      .fromPromise(Promise.resolve())
      .toPromise();
  }
  
  public add(issue: Issue): void {
    Observable
      .fromPromise(Promise.resolve())
      .toPromise();
  }

  public allList(): Promise<Issue[]> {
    return Observable
      .fromPromise(Promise.resolve([{'title': 'TestPost', 'desc': 'Admin'}]))
      .toPromise();
  }

}