import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { FeedService } from '../feed.service';

@Component({
  selector: 'panel-container',
  templateUrl: './panel-container.component.html',
  styleUrls: ['./panel-container.component.css']
})
export class PanelContainerComponent implements OnInit {
  drawerMode: string = 'side';
  _isSmallScreen: Boolean = false;
  constructor(private service: FeedService) { }

  ngOnInit(): void {
    this.service.fetchFeeds();
  }


  @Input()
  get isSmallScreen(): Boolean {
    return this._isSmallScreen;
  }

  set isSmallScreen(value: Boolean) {
    this._isSmallScreen = value;
    this.drawerMode = value ? 'over' : 'side';
  }

}
