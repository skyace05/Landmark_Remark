import { Component } from '@angular/core';
import { httpService } from './app.service';
import { Landmark } from "./app.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { MapComponent } from './map/map.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [httpService]
})


export class AppComponent  {
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private _httpService: httpService) {
    this.display();
  }

  results: Landmark[];

  display() {
    this._httpService.getLandmarks().subscribe(data => {
      this.results = data;
    });
  }

  
}
