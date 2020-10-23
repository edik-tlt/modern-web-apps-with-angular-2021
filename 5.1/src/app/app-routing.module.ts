import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentContainerComponent } from './content-container/content-container.component';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  {
    path: 'items/:id',
    component: ItemListComponent,
    outlet: 'feed-items'
  }, {
    path: 'item/:id',
    component: ContentContainerComponent,
    outlet: 'content'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
