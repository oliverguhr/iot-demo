import { IotWebPage } from './app.po';

describe('iot-web App', function() {
  let page: IotWebPage;

  beforeEach(() => {
    page = new IotWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
