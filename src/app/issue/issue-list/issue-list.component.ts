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
  ) { }

  ngOnInit() {
    this.issues = this.issueStoreService.list;
  }
  
  public onDelete(index: number): void {
    this.issueStoreService.delete(index);
  }

  @Output('on-update')
  private OnUpdate

  public onUpdate(index: number): void {
    
  }
}
