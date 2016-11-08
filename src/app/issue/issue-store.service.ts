import { Injectable } from '@angular/core';

import { Issue } from './issue';

@Injectable()
export class IssueStoreService {

  private issues: Issue[] = [];
  
  constructor() { }

  
  public delete(index: number): void {
    this.issues.splice(index, 1);
  }
  
  public add(issue: Issue): void {
    this.issues.push(issue);
  }
  
  public update(index: number, issue: Issue): void {
    this.issues[index] = issue;
  }

  public get list(): Issue[] {
    return this.issues;
  }
}
