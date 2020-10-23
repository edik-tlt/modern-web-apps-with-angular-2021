import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Feed, FeedItem} from './feed';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  feeds: Feed[];
  constructor(private http: HttpClient) { }
  private url: string = `http://localhost:3000`;

  addFeed(url: string) {
    this.http.post<Feed>(`${this.url}/feeds`, {url})
      .subscribe(feed => this.feeds.push(feed));
  }

  fetchFeeds() {
    this.http.get<Feed[]>(`${this.url}/feeds`).subscribe(data => {
      this.feeds = data;
    });
  }

  fetchFeed(id:number) {
    return this.http.get<Feed>(`${this.url}/feeds/${id}`);
  }

  fetchItem(id:number) {
    return this.http.get<FeedItem>(`${this.url}/items/${id}`);
  }

  removeFeeds(ids: number[]) {
    ids.forEach(id => {
      this.http.delete(`${this.url}/feeds/${id}`).subscribe( data => {
        let index = this.feeds.findIndex(f => f.id === id);

        if (index > -1) {
          this.feeds.splice(index, 1);
        }
      })
    });
  }
}
