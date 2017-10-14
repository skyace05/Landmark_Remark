import { Component } from '@angular/core';
import { httpService } from './app.service';
import { HttpClient } from "@angular/common/http";

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

  display(){
    var results = this._httpService.getLandmarks();

    return "test";
  }

  
}
