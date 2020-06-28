import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoaderService } from './LoaderService';

@NgModule({
  imports: [],
  declarations: [],
  providers: [],
  exports: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        LoaderService,
      ]
    };
  }
}
