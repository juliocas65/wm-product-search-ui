import { SearchPanelModule } from './search-panel.component.module';

describe('ErrorPermissionModule', () => {
  let searchPanelModule;

  beforeEach(() => {
    searchPanelModule = new SearchPanelModule();
  });

  test('should create an instance', () => {
    expect(searchPanelModule).toBeTruthy();
  });
});
