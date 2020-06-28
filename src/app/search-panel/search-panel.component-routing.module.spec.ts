import { SearchPanelRoutingModule } from './search-panel.component-routing.module';

describe('ErrorPermissionModule', () => {
  let searchPanelRoutingModule;

  beforeEach(() => {
    searchPanelRoutingModule = new SearchPanelRoutingModule();
  });

  test('should create an instance', () => {
    expect(searchPanelRoutingModule).toBeTruthy();
  });
});
