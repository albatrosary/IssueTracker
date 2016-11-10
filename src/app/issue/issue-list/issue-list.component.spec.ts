/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component, Input, Output } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IssueListComponent } from './issue-list.component';

import { IssueStoreService } from '../issue-store.service';
import { MockIssueStoreService } from '../issue-store.service.mock';

@Component({
  selector: 'app-issue-detail',
  template: `
  {{rownum}}
  {{title}}
  {{desc}}
  `
})
class AppIssueDetailWrapper {
  @Input() rownum: number
  @Input() title: string
  @Input() desc: string
  @Output('on-delete') onDelete() { }
};

describe('IssueListComponent', () => {
  let component: IssueListComponent;
  let fixture: ComponentFixture<IssueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        IssueListComponent,
        AppIssueDetailWrapper
      ],
      providers: [
        {provide: IssueStoreService, useClass: MockIssueStoreService}
      ],
      imports: [
        HttpModule
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
