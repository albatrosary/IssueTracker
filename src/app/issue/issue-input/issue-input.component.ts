import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Issue } from '../issue';
import { IssueStoreService } from '../issue-store.service';

@Component({
  selector: 'app-issue-input',
  templateUrl: './issue-input.component.html',
  styleUrls: ['./issue-input.component.css']
})
export class IssueInputComponent implements OnInit {

  constructor(
    private issueStoreService: IssueStoreService
  ) {
  }

  ngOnInit() {
  }

  public onSubmit(form: NgForm): void {

    const issue = {
      title: form.value.title,
      desc: form.value.desc
    }

    this.issueStoreService.add(issue);

    form.reset();
  }
}
