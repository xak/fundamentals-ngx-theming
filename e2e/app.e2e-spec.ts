import { FundamentalsNgxThemingPage } from './app.po';

describe('fundamentals-ngx-theming App', () => {
  let page: FundamentalsNgxThemingPage;

  beforeEach(() => {
    page = new FundamentalsNgxThemingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
