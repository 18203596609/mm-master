import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class AppServiceService {

  constructor(
    public http: HttpClient,
  ) { }

  public getJson(url, params) {
    return this.http.get(url, { params: params }).map((res) => {
      return res;
    });
  }
}
