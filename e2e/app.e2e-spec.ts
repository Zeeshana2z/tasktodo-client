import { XerbiaAppPage } from './app.po';

describe('xerbia-app App', () => {
  let page: XerbiaAppPage;

  beforeEach(() => {
    page = new XerbiaAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
