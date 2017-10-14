import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { RequestOptions } from '@angular/http';

@Injectable()
export class httpService {

  constructor(private _http: HttpClient) { }

  getLandmarks(): any {
    let headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    this._http.get('http://localhost:54103/api/Landmarks', {headers:headers}).subscribe(data => {
      data;
      // the console.log(...) line prevents your code from working 
      // either remove it or add the line below (return ...)
      console.log("I CAN SEE DATA HERE: ", data);
      return data;
    });

  }

} 
