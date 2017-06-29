import { RPiGarageAngularPage } from './app.po';

describe('rpi-garage-angular App', () => {
  let page: RPiGarageAngularPage;

  beforeEach(() => {
    page = new RPiGarageAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
