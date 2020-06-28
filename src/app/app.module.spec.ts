import { AppModule } from "./app.module";

describe('AppModule', () => {
  let componentModule: AppModule;

  beforeEach(() => {
    componentModule = new AppModule();
  });

  it('should create an instance', () => {
    expect(componentModule).toBeTruthy();
  });
});
