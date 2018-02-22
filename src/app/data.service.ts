import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  url = "https://api.mockaroo.com/api/7e1a5150?count=10";
  apiKey = "b326e3e0";

  constructor(private _http: HttpClient) { }

  fetchData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-API-Key': this.apiKey
      })
    };

    return this._http.get(this.url, httpOptions)
      .map(result => result);
  }

}
