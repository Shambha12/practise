import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './components/child1/child1.component';
import { Subject1Component } from './components/subject1/subject1.component';
import { Subject2Component } from './components/subject2/subject2.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Subject1Component,
    Subject2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
