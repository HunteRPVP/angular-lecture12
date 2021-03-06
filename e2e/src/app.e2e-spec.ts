import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('angular-lecture12 app is running!');
  });

  it('should display param.name', async () => {
    await page.navigateTo();
    expect(await page.getNameText()).toEqual('Vadim is a cool guy!!!');
  });

  it('should display square as 25', async () => {
    await page.navigateTo();
    expect(await page.getSquareText()).toEqual('25');
  });

  it('should display a as 5', async () => {
    await page.navigateTo();
    expect(await page.getAText()).toEqual('5');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
