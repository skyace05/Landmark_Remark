import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class httpService {

  constructor(private _http: HttpClient) { }

  getLandmarks(): any {
    this._http.get('http://localhost:54103/api/Landmarks').subscribe(data => {
      // Read the result field from the JSON response.
      var results = data;

      return results;
    });

  }

} 
