import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../../shared/classes/BaseComponent';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { InvokerService } from '../../shared/core/InvokerService';
import { LoaderService } from '../../shared/core/LoaderService';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('25ms')),
    ]),
  ],
})
export class SearchPanelComponent extends BaseComponent implements OnInit {

  public data: any[] = [];
  public products: any[] = [];
  public search;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private invoker: InvokerService,
    public loaderService: LoaderService,
  ) {
    super();
  }

  ngOnInit() { 
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      search: [null, [ ]],
    });
  }

  doSearch(event) {
    this.search = this.getFormControl('search').value;
      let params = new HttpParams()
      .set("search", this.search)
      this.products = []
      this.loaderService.display(true)
      this.invoker.makeGet('GET_PRODUCTS', params)
        .subscribe(
          (dataIn: any) => {
            this.loaderService.display(false)
            if (dataIn.code === "SUCCESS") {
              this.processData(dataIn)
            }
          },
          error => {
            this.loaderService.display(false)
            this.products = []
          }
        );
  }

  processData(dataIn) {
    this.data = dataIn.data
    if (this.data !== undefined) {
      this.data.forEach((product: any) => {
        this.products.push(product);
      });
    }
  }
}
