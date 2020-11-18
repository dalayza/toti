import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ComponentesModule } from './componentes/componentes.module';
import { rounting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentesModule,
    // HttpClientModule,
    rounting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
