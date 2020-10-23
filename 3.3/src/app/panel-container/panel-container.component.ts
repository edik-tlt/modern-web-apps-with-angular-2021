import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'panel-container',
  templateUrl: './panel-container.component.html',
  styleUrls: ['./panel-container.component.css']
})
export class PanelContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('drawer') drawer: MatDrawer;

  toggleFeeds() {
    this.drawer.toggle();
  }

}
