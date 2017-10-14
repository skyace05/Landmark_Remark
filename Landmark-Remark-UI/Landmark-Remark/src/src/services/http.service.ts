import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class httpService {
  constructor() { }
  /*getLandmarks(): any {
    this.http.get('http://localhost:54103/api/Landmarks').subscribe(data => {
      // Read the result field from the JSON response.
      var results = data['Landmarks'];

      return results;
    });

  }*/

  getLandmarks(): any {
    return "landmarks test";
  }
} 
