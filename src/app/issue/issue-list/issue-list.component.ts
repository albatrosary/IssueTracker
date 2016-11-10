import { Component, OnInit, Output } from '@angular/core';

import { Issue } from '../issue';
import { IssueStoreService } from '../issue-store.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  private issues: Issue[];

  constructor(
    private issueStoreService: IssueStoreService
  ) {
  }

  ngOnInit() {
    this.issueStoreService.allList()
      .then(response => this.issues = response)
      .catch(error => console.log(error));
  }
  
  public onDelete(index: number): void {
    this.issueStoreService.delete(index)
      .catch(error => console.log(error))
  }
}
