import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IssueComponent } from './issue/issue.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { routing, appRoutingProviders }  from './app.routes';
import { IssueInputComponent } from './issue/issue-input/issue-input.component';
import { IssueListComponent } from './issue/issue-list/issue-list.component';
import { IssueDetailComponent } from './issue/issue-detail/issue-detail.component';

import { IssueStoreService } from './issue/issue-store.service';
import { MarkdownPipe } from './markdown.pipe';
import { WikiComponent } from './wiki/wiki.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IssueComponent,
    PageNotFoundComponent,
    IssueInputComponent,
    IssueListComponent,
    IssueDetailComponent,
    MarkdownPipe,
    WikiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    IssueStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
