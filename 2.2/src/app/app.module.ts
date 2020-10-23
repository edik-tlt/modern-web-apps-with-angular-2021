import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialStuffModule } from './material-stuff/material-stuff.module';
import { PanelContainerComponent } from './panel-container/panel-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialStuffModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
