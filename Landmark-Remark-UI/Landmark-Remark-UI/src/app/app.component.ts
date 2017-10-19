import { Component } from '@angular/core';
import { httpService } from './app.service';
import { Landmark } from "./app.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Geolocation } from 'ionic-native';

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
  query: Landmark[];
  lat: number;
  lng: number;
  user: string;
  search: string;
  note: string;

  display() {
    Geolocation.getCurrentPosition().then(pos => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
    });

    this._httpService.getLandmarks().subscribe(data => {
        this.results = data;
    });
  }

  submit() {
    // checks if user already exists
    let user = this.user;
    let userId = null;
    this.results.forEach(function (result) {
        if (user == result.User) {
            userId = result.Id;
        }
    })

    // add new user if note is not empty or null and user does not exists
    if (this.note != null && this.note != "" && userId == null) {
        let body = {
            'Latitude': this.lat,
            'Longitude': this.lng,
            'User': this.user,
            'Note': this.note
        };
        this._httpService.postNotes(body).subscribe(data => {
            this.results = data;
        });;
    }
    // if user already exists just update record
    else {
        let body = {
            'Id': userId,
            'Latitude': this.lat,
            'Longitude': this.lng,
            'User': this.user,
            'Note': this.note         
        };
        this._httpService.updateNotes(body).subscribe(data => {
            this.results = data;
        });
    }
  }

  filterDisplay() {
      this.query = new Array<Landmark>();
      for (var i = 0; i < this.results.length; i++)
          if (this.results[i].Note.match(this.search) || this.results[i].User.match(this.search))
              this.query.push(this.results[i]);
  }  
}
