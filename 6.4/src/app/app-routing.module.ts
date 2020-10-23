import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ContentContainerComponent } from './content-container/content-container.component';
import { ItemListComponent } from './item-list/item-list.component';
import { LoginComponent } from './login/login.component';
import { PanelContainerComponent } from './panel-container/panel-container.component';

const routes: Routes = [{
  path: 'feeds',
  component: PanelContainerComponent,
  canActivate: [AuthGuard],
  children: [{
    path: 'items/:id',
    component: ItemListComponent,
    outlet: 'feed-items'
  }, {
    path: 'item/:id',
    component: ContentContainerComponent,
    outlet: 'content'
  }]
}, {
  path: '',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
