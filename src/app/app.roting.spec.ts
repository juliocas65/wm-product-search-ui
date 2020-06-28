import {
  Routing
} from "./app.routing";

describe('AppRoutingModule', () => {
  let componentModule: Routing;

  beforeEach(() => {
    componentModule = new Routing();
  });

  it('should create an instance', () => {
    expect(componentModule).toBeTruthy();
  });
});
