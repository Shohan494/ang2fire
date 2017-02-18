import { Ang2fireTestPage } from './app.po';

describe('ang2fire-test App', function() {
  let page: Ang2fireTestPage;

  beforeEach(() => {
    page = new Ang2fireTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
