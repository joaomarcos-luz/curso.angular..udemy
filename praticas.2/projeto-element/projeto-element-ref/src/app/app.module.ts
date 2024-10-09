import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FocusInputDirective } from './directives/focus-directive';
import { XssComponent } from './xss/xss.component'

@NgModule({
  declarations: [
    AppComponent,
    FocusInputDirective,
    XssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
