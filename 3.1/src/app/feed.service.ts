import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Feed, FeedItem} from './feed';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http: HttpClient) { }

  fetchFeeds() {
    return this.http.get<Feed[]>('http://localhost:3000/feeds');
  }
}
