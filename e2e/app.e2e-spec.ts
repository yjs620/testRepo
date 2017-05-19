import { UdemyTwitPage } from './app.po';

describe('udemy-twit App', function() {
  let page: UdemyTwitPage;

  beforeEach(() => {
    page = new UdemyTwitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
