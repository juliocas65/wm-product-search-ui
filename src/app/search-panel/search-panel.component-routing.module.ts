import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPanelComponent } from './search-panel.component';

const routes: Routes = [
  { path: '', component: SearchPanelComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class SearchPanelRoutingModule { }
