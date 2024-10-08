import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComDiretivaComponent } from './com-diretiva/com-diretiva.component';
import { HgDirectives } from './directives/hg-directives';

@NgModule({
  declarations: [
    AppComponent,
    ComDiretivaComponent,
    HgDirectives
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
