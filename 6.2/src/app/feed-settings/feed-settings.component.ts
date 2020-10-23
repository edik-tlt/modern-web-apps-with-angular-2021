import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { FeedService } from '../feed.service';

@Component({
  selector: 'feed-settings',
  templateUrl: './feed-settings.component.html',
  styleUrls: ['./feed-settings.component.css']
})
export class FeedSettingsComponent implements OnInit {
  service: FeedService;
  constructor(service: FeedService) {
    this.service = service;
   }

  ngOnInit(): void {
  }

  @ViewChild('feedSelection') selectedFeeds: MatSelectionList;

  removeFeeds() {
    let ids = this.selectedFeeds.selectedOptions
      .selected.map(option => option.value.id);

    this.service.removeFeeds(ids);
  }

}
