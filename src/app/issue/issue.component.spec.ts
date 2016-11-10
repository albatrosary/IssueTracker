/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';

import { IssueComponent } from './issue.component';

@Component({
  selector: 'app-issue-input',
  template: './issue.component.html'
})
class AppIssueInputWrapper { }

@Component({
  selector: 'app-issue-list',
  template: './issue-list.component.html'
})
class AppIssueListWrapper { }

describe('IssueComponent', () => {
  let component: IssueComponent;
  let fixture: ComponentFixture<IssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IssueComponent,
        AppIssueInputWrapper,
        AppIssueListWrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
