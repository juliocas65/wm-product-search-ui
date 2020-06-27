import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { Routes } from '@angular/router';
import { Routing } from './app.routing';
import { HttpClient } from '@angular/common/http';

import { SearchPanelComponent } from './search-panel/search-panel.component';
import { SearchPanelModule } from './search-panel/search-panel.component.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InvokerService } from '../shared/core/InvokerService';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from '../shared/core/AuthGuard';
import { LoaderService } from '../shared/core/LoaderService';
import { SharedModule } from '../shared/core/SharedModule';

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
  bootstrap: [ AppComponent ],
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