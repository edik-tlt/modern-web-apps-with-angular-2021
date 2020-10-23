import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Feed, FeedItem} from './feed';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  feeds: Feed[];
  constructor(private http: HttpClient, private auth: AuthService) { }
  private url: string = `http://localhost:3000`;

  private get options(): object {
    if (!this.auth.token) {
      return {};
    }

    return {
      headers: new HttpHeaders({'authorization': `${this.auth.token}`})
    };
  }

  addFeed(url: string) {
    this.http.post<Feed>(`${this.url}/feeds`, {url}, this.options)
      .subscribe(feed => this.feeds.push(feed));
  }

  fetchFeeds() {
    this.http.get<Feed[]>(`${this.url}/feeds`, this.options).subscribe(data => {
      this.feeds = data;
    });
  }

  fetchFeed(id:number) {
    return this.http.get<Feed>(`${this.url}/feeds/${id}`, this.options);
  }

  fetchItem(id:number) {
    return this.http.get<FeedItem>(`${this.url}/items/${id}`, this.options);
  }

  removeFeeds(ids: number[]) {
    ids.forEach(id => {
      this.http.delete(`${this.url}/feeds/${id}`, this.options).subscribe( data => {
        let index = this.feeds.findIndex(f => f.id === id);

        if (index > -1) {
          this.feeds.splice(index, 1);
        }
      })
    });
  }
}
