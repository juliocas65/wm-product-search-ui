import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SearchPanelComponent } from './search-panel.component';
import { SearchPanelRoutingModule } from './search-panel.component-routing.module';

import { SharedModule } from '../../shared/core/SharedModule';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    SharedModule,
    ReactiveFormsModule,
    SearchPanelRoutingModule,
  ],
  declarations: [
    SearchPanelComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class SearchPanelModule { }
