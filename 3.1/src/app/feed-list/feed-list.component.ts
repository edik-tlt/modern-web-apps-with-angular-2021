import { Component, OnInit } from '@angular/core';
import { FeedService } from './../feed.service';
import {Feed, FeedItem} from './../feed';


@Component({
  selector: 'feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit {
  private feeds: Feed[];
  constructor(private service: FeedService) { }

  ngOnInit(): void {
    this.service.fetchFeeds().subscribe((data: Feed[]) => this.feeds = data);
  }

}
