import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropDisabled } from './diretibes/diretive-prop'
import { StyleDirectives } from './diretibes/style.directive'

@NgModule({
  declarations: [
    AppComponent,
    PropDisabled,
    StyleDirectives
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
