import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-highcharts';


import { AppComponent } from './app.component';

declare var require: any;


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChartModule.forRoot(require('highcharts/highstock'))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
