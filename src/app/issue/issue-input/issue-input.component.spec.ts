/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { IssueInputComponent } from './issue-input.component';

import { IssueStoreService } from '../issue-store.service';
import { MockIssueStoreService } from '../issue-store.service.mock';

describe('IssueInputComponent', () => {
  let component: IssueInputComponent;
  let fixture: ComponentFixture<IssueInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueInputComponent ],
      imports: [
        FormsModule, 
        ReactiveFormsModule,
        HttpModule
      ],
      providers: [
        {provide: IssueStoreService, useClass: MockIssueStoreService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
