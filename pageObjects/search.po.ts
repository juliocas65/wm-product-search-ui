import { browser, by, element } from 'protractor';

export class Search {

  public sleep(time) {
    browser.sleep(time);
  }

  public navigateTo(url) {
    return browser.get(url);
  }

  public getSearchField() {
    return element(by.id('search-input'));
  }

  public getProductsList() {
    return element(by.id('product-list'));
  }

  public getSearchZeroLabel() {
    return element(by.id('search-zero'));
  }

  public getSearchInitLabel() {
    return element(by.id('search-init'));
  }

}
