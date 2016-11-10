import { IssueTrackerPage } from './app.po';

describe('issue-tracker App', function() {
  let page: IssueTrackerPage;

  beforeEach(() => {
    page = new IssueTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Issue Tracker');
  });
});
