import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { RequestOptions } from '@angular/http';
import { Landmark } from "./app.model";
import 'rxjs/Rx';  
import { Observable } from "rxjs/Observable";
import { Http } from '@angular/http';

@Injectable()
export class httpService {

  constructor(private _http: HttpClient) { }

  getLandmarks(): Observable<Landmark[]> {
    return this._http.get<Landmark[]>('http://localhost:54103/api/Landmarks')
      .map((data: Landmark[]) => {
        return data;
    });    
  }

} 
