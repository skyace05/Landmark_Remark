import { Component } from '@angular/core';
import { httpService } from './app.service';
import { Landmark } from "./app.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [httpService]
})
export class AppComponent  {

  constructor(private _httpService: httpService) {
    this.display();
  }
  results: Landmark[];
  output: Landmark[];
  location: any;

  display() {
    this._httpService.getLandmarks().subscribe(data => {
      this.results = data;
      this.location = this.results[0].Location;
    });
  }

  
}
