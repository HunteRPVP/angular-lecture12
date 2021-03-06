import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root div.content span'))?.getText();
  }

  async getNameText(): Promise<string> {
    return element(by.css('app-root span[data-test-id="param.name"]'))?.getText();
  }

  async getSquareText(): Promise<string> {
    return element(by.css('app-root p.square'))?.getText();
  }

  async getAText(): Promise<string> {
    return element(by.css('app-root input[name="a"]')).getAttribute('value');
  }
}
