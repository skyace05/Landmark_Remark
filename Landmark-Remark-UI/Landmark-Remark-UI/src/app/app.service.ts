import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Landmark } from "./app.model";
import 'rxjs/Rx';  
import { Observable } from "rxjs/Observable";

@Injectable()
export class httpService {

  constructor(private http: HttpClient) { }

  getLandmarks(): Observable<Landmark[]> {
    return this.http.get<Landmark[]>('http://localhost:50440/api/Landmarks')
      .map((data: Landmark[]) => {
        return data;
    });    
  }

  postNotes(body): any {
    return this.http.post<Landmark>('http://localhost:50440/api/Landmarks', body)
        .subscribe((data: Landmark) => {
            return data;
    });    
  }

  updateNotes(body): Observable<Landmark[]> {
      return this.http.put<Landmark[]>('http://localhost:50440/api/Landmarks/' + body.Id, body)
          .map((data: Landmark[]) => {
            return data;
    });
  }

} 
