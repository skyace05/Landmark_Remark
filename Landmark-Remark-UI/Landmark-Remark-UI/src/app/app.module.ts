import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { httpService } from './app.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
const googleMapsCore = AgmCoreModule.forRoot({
  apiKey: 'AIzaSyCCT4KyBGEMTvCAJn30J7zgXQY7Svywulw',
});

@NgModule({
  declarations: [
    AppComponent, MapComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, googleMapsCore
  ],
  providers: [httpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
