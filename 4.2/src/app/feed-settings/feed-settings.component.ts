import { Component, OnInit } from '@angular/core';
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

}
