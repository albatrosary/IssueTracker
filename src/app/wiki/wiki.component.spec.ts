/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { WikiComponent } from './wiki.component';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer , SafeHtml } from '@angular/platform-browser';

@Pipe({name: 'markdown'})
class MarkdownPipeWrapper implements PipeTransform {
  constructor (private sanitizer: DomSanitizer) {}
  transform(value: any, args?: any): SafeHtml {
    if ( value === undefined || value === null ) return '';
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}

describe('WikiComponent', () => {
  let component: WikiComponent;
  let fixture: ComponentFixture<WikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiComponent , MarkdownPipeWrapper ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
