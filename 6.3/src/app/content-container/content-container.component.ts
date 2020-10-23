import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FeedItem } from '../feed';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit {
  item$: Observable<FeedItem>;

  constructor(private route: ActivatedRoute, private service: FeedService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => {
      let item = window.history.state;

      if (item.content) {
        this.item$ = of(item);
      } else {
        this.item$ = this.service.fetchItem(parseInt(p.get('id'), 10));
      }

      
    })
  }

}
