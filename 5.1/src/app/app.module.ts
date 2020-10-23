import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialStuffModule } from './material-stuff/material-stuff.module';
import { PanelContainerComponent } from './panel-container/panel-container.component';
import { FeedListComponent } from './feed-list/feed-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { FeedSettingsComponent } from './feed-settings/feed-settings.component';

import { FeedService } from './feed.service';

@NgModule({
  declarations: [
    AppComponent,
    PanelContainerComponent,
    FeedListComponent,
    ItemListComponent,
    ContentContainerComponent,
    FeedSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialStuffModule,
    HttpClientModule
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
