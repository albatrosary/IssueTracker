import { Component , OnInit } from '@angular/core';

import { Issue } from './issue/issue'; 
import { IssueStoreService } from './issue/issue-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private issues: Issue[];

  constructor(private issueStoreService: IssueStoreService) {
  
  }

  ngOnInit () {
    this.issues = this.issueStoreService.list;
  }
}
