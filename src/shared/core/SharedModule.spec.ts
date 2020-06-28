import { SharedModule } from './SharedModule';

describe('ErrorPermissionModule', () => {
  let sharedModule;

  beforeEach(() => {
    sharedModule = new SharedModule();
  });

  test('should create an instance', () => {
    expect(sharedModule).toBeTruthy();
  });
});
