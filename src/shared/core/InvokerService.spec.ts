import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ENV } from '../../environments/environment';
import { InvokerService } from './InvokerService';
import { HttpHeaders } from '@angular/common/http';

describe('InvokerService ::', () => {
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

  describe('getDefaultHeaders ::', () => {
    it('should return object with Content-Type value application/json', () => {
      const defaultHeader = service.getDefaultHeaders();
      expect(defaultHeader.get('Content-Type')).toBe('application/json');
    });
    it('should return object with x-country value ENV.COUNTRY', () => {
      const defaultHeader = service.getDefaultHeaders();
      expect(defaultHeader.get('x-country')).toBe(ENV.COUNTRY);
    });
    it('should return object with x-commerce value ENV.COMMERCE', () => {
      const defaultHeader = service.getDefaultHeaders();
      expect(defaultHeader.get('x-commerce')).toBe(ENV.COMMERCE);
    });
    it('should return object with x-channel value ENV.CHANNEL', () => {
      const defaultHeader = service.getDefaultHeaders();
      expect(defaultHeader.get('x-channel')).toBe(ENV.CHANNEL);
    });
  });

  describe('makeGet ::', () => {
    it('should make request to service with default header', () => {
      const dummyResponse = {
        'code': 'SOLICITUD_CREADA'
      };

      ENV['FAKE_SERVICE'] = { ENDPOINT: 'http://localhost/endpoint' };
      service.makeGet('FAKE_SERVICE', {}).subscribe(res => {
        expect(res['body']['code']).toBe('SOLICITUD_CREADA');
      });

      const req = httpMock.expectOne(ENV['FAKE_SERVICE'].ENDPOINT);
      expect(req.request.method).toBe('GET');
      req.flush(dummyResponse);
    });

    it('should make request to service with new header', () => {
      const dummyResponse = {
        'code': 'SOLICITUD_CREADA'
      };

      ENV['FAKE_SERVICE'] = { ENDPOINT: 'http://localhost/endpoint' };
      service.makePost('FAKE_SERVICE', {}, new HttpHeaders()).subscribe(res => {
        expect(res['body']['code']).toBe('SOLICITUD_CREADA');
      });

      const req = httpMock.expectOne(ENV['FAKE_SERVICE'].ENDPOINT);
      expect(req.request.method).toBe('POST');
      req.flush(dummyResponse);
    });
  });
});
