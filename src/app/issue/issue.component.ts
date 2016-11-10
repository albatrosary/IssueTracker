import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  private i: number;
  private title: string;
  private desc: string;

  constructor() { }

  ngOnInit() {
  }
}
