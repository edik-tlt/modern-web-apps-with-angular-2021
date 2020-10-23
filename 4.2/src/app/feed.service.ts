import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Feed, FeedItem} from './feed';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  feeds: Feed[];
  constructor(private http: HttpClient) { }

  fetchFeeds() {
    this.http.get<Feed[]>('http://localhost:3000/feeds').subscribe(data => {
      this.feeds = data;
    });
  }

  fetchFeed(id:number) {
    return this.http.get<Feed>(`http://localhost:3000/feeds/${id}`);
  }

  fetchItem(id:number) {
    return this.http.get<FeedItem>(`http://localhost:3000/items/${id}`);
  }
}
