import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FirstCompComponent,
    SecondCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
