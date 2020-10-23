import { Component, OnInit } from '@angular/core';
import { FeedService } from './../feed.service';
import {Feed, FeedItem} from './../feed';
import {Observable} from 'rxjs';

@Component({
  selector: 'feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css']
})
export class FeedListComponent implements OnInit {
  feeds$: Observable<Feed[]>;
  constructor(private service: FeedService) { }

  ngOnInit(): void {
    this.feeds$ = this.service.fetchFeeds();
  }

}
