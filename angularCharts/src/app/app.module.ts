import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsDatesChartsComponent } from './components-dates-charts/components-dates-charts.component';
import { ComponentsHoursChartsComponent } from './components-hours-charts/components-hours-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsDatesChartsComponent,
    ComponentsHoursChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
