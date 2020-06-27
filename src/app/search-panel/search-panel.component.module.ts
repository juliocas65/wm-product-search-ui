import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPanelComponent } from './search-panel.component';
import { SearchPanelRoutingModule } from './search-panel.component-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
  providers: [ ],
})
export class SearchPanelModule { }
