import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { FeedService } from '../feed.service';

@Component({
  selector: 'panel-container',
  templateUrl: './panel-container.component.html',
  styleUrls: ['./panel-container.component.css']
})
export class PanelContainerComponent implements OnInit {

  constructor(private service: FeedService) { }

  ngOnInit(): void {
    this.service.fetchFeeds();
  }

  @ViewChild('drawer') drawer: MatDrawer;
  @ViewChild('settings') settings: MatDrawer;


  toggleFeeds() {
    this.drawer.toggle();
  }

  toggleSettings(){
    this.settings.toggle();
  }

}
