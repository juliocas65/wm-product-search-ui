import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENV } from '../../environments/environment';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Injectable()
export class InvokerService {

  public static readonly SESSION_NAME = 'uidsession';

  constructor(
    public http: HttpClient,
  ) { }

  public getBasicHeaders() {
    const object = {
      'Content-Type': 'application/json',
      'x-country': ENV.COUNTRY,
      'x-commerce': ENV.COMMERCE,
      'x-channel': ENV.CHANNEL,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'access-control-allow-origin, access-control-allow-headers'
    };
    return new HttpHeaders(object);
  }

  public getDefaultHeaders() {
    const object = {
      'Content-Type': 'application/json',
      'x-country': ENV.COUNTRY,
      'x-commerce': ENV.COMMERCE,
      'x-channel': ENV.CHANNEL,
      'x-api-key': ENV.APIKEY,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'access-control-allow-origin, access-control-allow-headers'
    };
    return new HttpHeaders(object);
  }

  public makePost(resource: string, headers: {}, body: {}): Observable<HttpResponse<string>> {
    const endpoint = ENV[resource].ENDPOINT;
    const timeout = ENV[resource].TIMEOUT;
    return this.http.post<any>(endpoint, body, { headers: headers, observe: 'response' });
  }

  public makeGet(resource: string, paramsIn: {}): Observable<HttpResponse<string>> {
    let options = { 
      headers: this.getDefaultHeaders(),
      params: paramsIn
    };
    if (ENV.name === 'local') {
      options.headers = this.getBasicHeaders();
    }
    
    const endpoint = ENV[resource].ENDPOINT;
    const timeout = ENV[resource].TIMEOUT;
    return this.http.get<any>(endpoint, { headers: options.headers, params: options.params });
  }
}
