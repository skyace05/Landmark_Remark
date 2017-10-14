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
  }

  title = this.display();
  results: any;
  output: string;
  display(){

    console.log("log: ", this._httpService.getLandmarks());

    return this.output;
  }

  
}
