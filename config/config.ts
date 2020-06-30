import { browser, Config } from 'protractor';

export let config: Config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',

  baseUrl: 'http://localhost:8080/',

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', 'no-sandbox', '--disable-gpu', '--window-size=800x600']
    }
  },

  directConnect: false,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    '../features/*.feature'
  ],

  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
  },

  cucumberOpts: {
    compiler: 'ts:ts-node/register',
    strict: true,
    format: ['pretty'],
    require: ['../stepdefinitions/*.steps.ts'],
    tags: '@Android or @Web or @First or ~@Ignore'
  }
};
