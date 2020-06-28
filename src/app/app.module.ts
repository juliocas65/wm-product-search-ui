import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Routing } from './app.routing';

import { SearchPanelComponent } from './search-panel/search-panel.component';
import { SearchPanelModule } from './search-panel/search-panel.component.module';

import { AuthGuard } from '../shared/core/AuthGuard';
import { InvokerService } from '../shared/core/InvokerService';
import { LoaderService } from '../shared/core/LoaderService';
import { SharedModule } from '../shared/core/SharedModule';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    SearchPanelModule,
    ReactiveFormsModule,
    Routing,
    RouterModule.forRoot([
      { path: '', component: SearchPanelComponent },
    ]),
    SharedModule.forRoot(),
    NgbModule,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    HttpClient,
    InvokerService,
    AuthGuard,
  ]
})
export class AppModule { }

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
