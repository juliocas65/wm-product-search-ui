import { CallbackStepDefinition, defineSupportCode } from 'cucumber';
import { browser, ExpectedConditions, protractor } from 'protractor';

import { Search } from 'pageObjects/search.po';

// tslint:disable-next-line:no-var-requires
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

defineSupportCode(({ Given, When, Then, setDefaultTimeout }) => {

  const search: Search = new Search();

  Given(/^I want to enter in the url correctly$/, () => {
    return search.navigateTo('/');
  });

  When(/^I enter the word I want to search "([^"]*)"$/, (word: string) => {
    const wordSearch = search.getSearchField();
    // tslint:disable-next-line:no-unused-expression
    expect(wordSearch.isPresent()).to.eventually.be.true;
    wordSearch.sendKeys(word);
    return wordSearch.sendKeys(protractor.Key.ENTER);
  });

  Then(/^Products must be filled$/, () => {
    browser.wait(ExpectedConditions.visibilityOf(search.getProductsList()),
      40000, 'a RESULT PRODUCT message is shown taking too long to appear in the DOM');
    const label = search.getProductsList();
    // tslint:disable-next-line:no-unused-expression
    expect(label.isDisplayed()).to.eventually.be.true;
    return label.click();
  });

  Then(/^The search products page is up$/, () => {
    browser.wait(ExpectedConditions.visibilityOf(search.getSearchInitLabel()),
      40000, 'a INIT message is shown taking too long to appear in the DOM');
    const label = search.getSearchInitLabel();
    // tslint:disable-next-line:no-unused-expression
    expect(label.isDisplayed()).to.eventually.be.true;
    return label.click();
  });

  Then(/^Products must not be filled$/, () => {
    browser.wait(ExpectedConditions.visibilityOf(search.getSearchZeroLabel()),
      40000, 'a RESULT PRODUCT ZERO message is shown taking too long to appear in the DOM');
    const label = search.getSearchZeroLabel();
    // tslint:disable-next-line:no-unused-expression
    expect(label.isDisplayed()).to.eventually.be.true;
    return label.click();
  });

});
