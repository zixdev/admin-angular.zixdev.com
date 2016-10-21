import { TesttProjectPage } from './app.po';

describe('testt-project App', function() {
  let page: TesttProjectPage;

  beforeEach(() => {
    page = new TesttProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
