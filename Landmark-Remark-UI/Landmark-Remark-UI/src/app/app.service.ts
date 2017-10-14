import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { RequestOptions } from '@angular/http';
import { Landmark } from "./app.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class httpService {

  constructor(private _http: HttpClient) { }
  user: Landmark;
  getLandmarks(): Observable<Landmark> {
    return this._http.get<Landmark>('http://localhost:54103/api/Landmarks');

  }

} 
