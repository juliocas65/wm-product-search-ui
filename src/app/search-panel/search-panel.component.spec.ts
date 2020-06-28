import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { Component } from '@angular/core';

import { ENV } from '../../environments/environment';

import { SearchPanelComponent } from './search-panel.component';
import { InvokerService } from '../../shared/core/InvokerService';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { LoaderService } from '../../shared/core/LoaderService';
import { Observable } from 'rxjs';

@Component({
  selector: 'dummy'
})
export class DummyComponent {
}

describe('SearchPanelComponent', () => {
  let component: SearchPanelComponent;
  let fixture: ComponentFixture<SearchPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [SearchPanelComponent],
      providers: [
        InvokerService,
        HttpClient,
        HttpHandler,
        LoaderService
      ]
    })
      .compileComponents();
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(SearchPanelComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  describe('doSearch', () => {
    let injector: TestBed;
    let service: InvokerService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          InvokerService,
        ]
      });

      injector = getTestBed();
      service = injector.get(InvokerService);
      httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('should make request to service', () => {
      const invoker: InvokerService = TestBed.get(InvokerService);
      jest.spyOn(invoker, 'makeGet').mockImplementation(() => {
        return Observable.create(function (observer) {
          observer.next({ code: 'SUCCESS', data: [{ id: 'dummy' }] });
          observer.complete();
        });
      });
      fixture = TestBed.createComponent(SearchPanelComponent);
      component = fixture.debugElement.componentInstance;
      component.ngOnInit();
      component.form.controls['search'].setValue('ele');
      component.doSearch({});
      expect(invoker.makeGet).toHaveBeenCalled();
    });

    it('should make request to service with error', () => {
      const invoker: InvokerService = TestBed.get(InvokerService);
      jest.spyOn(invoker, 'makeGet').mockImplementation(() => {
        return Observable.create(function (observer) {
          observer.next(new Error('error'));
          observer.complete();
        });
      });
      fixture = TestBed.createComponent(SearchPanelComponent);
      component = fixture.debugElement.componentInstance;
      component.ngOnInit();
      component.form.controls['search'].setValue('ele');
      component.doSearch({});
      expect(invoker.makeGet).toHaveBeenCalled();
    });
  })
});
