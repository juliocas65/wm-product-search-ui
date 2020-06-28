import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../shared/core/LoaderService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public showLoader: boolean;

  constructor(
    private loaderService: LoaderService,
  ) {
    this.steLoaderStatus();
  }

  public ngOnInit() { }

  private steLoaderStatus = () => {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
