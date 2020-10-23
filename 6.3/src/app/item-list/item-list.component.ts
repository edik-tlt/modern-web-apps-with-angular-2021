import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Feed } from '../feed';
import { FeedService } from '../feed.service';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  id: number;
  feed$: Observable<Feed>;

  constructor(private route: ActivatedRoute, private service: FeedService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id'], 10);
      this.feed$ = this.service.fetchFeed(this.id);
    });
  }

}
