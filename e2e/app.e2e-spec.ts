import { StartZixdevComPage } from './app.po';

describe('start-zixdev-com App', function() {
  let page: StartZixdevComPage;

  beforeEach(() => {
    page = new StartZixdevComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
