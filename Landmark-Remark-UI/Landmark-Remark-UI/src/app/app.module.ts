import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { httpService } from './app.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const googleMapsCore = AgmCoreModule.forRoot({
  apiKey: 'AIzaSyCCT4KyBGEMTvCAJn30J7zgXQY7Svywulw',
});

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule, HttpClientModule, googleMapsCore, FormsModule, ReactiveFormsModule
  ],
  providers: [httpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
