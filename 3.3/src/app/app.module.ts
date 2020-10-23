import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialStuffModule } from './material-stuff/material-stuff.module';
import { PanelContainerComponent } from './panel-container/panel-container.component';
import { FeedListComponent } from './feed-list/feed-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelContainerComponent,
    FeedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialStuffModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
