import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Issue } from '../issue';
import { IssueStoreService } from '../issue-store.service';

@Component({
  selector: 'app-issue-input',
  templateUrl: './issue-input.component.html',
  styleUrls: ['./issue-input.component.css']
})
export class IssueInputComponent implements OnInit {

  private issue: Issue;

  constructor(
    private issueStoreService: IssueStoreService
  ) {
  }

  ngOnInit() {
    this.issue = new Issue;
  }

  public onSubmit(form: NgForm): void {

    this.issue.title = form.value.title;
    this.issue.desc = form.value.desc;

    this.issueStoreService.add(this.issue);
    this.issue = new Issue;

    form.reset();
  }
}
