import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlayerListComponent} from './player/player-list/player-list.component';
import {PlayerCreateComponent} from './player/player-create/player-create.component';
import {PlayerEditComponent} from './player/player-edit/player-edit.component';
import {PlayerDeleteComponent} from './player/player-delete/player-delete.component';
import {PlayerDetailComponent} from './player/player-detail/player-detail.component';

// @ts-ignore
// @ts-ignore
const routes: Routes = [{
  path: 'player/list',
  component: PlayerListComponent
}, {
  path: 'player/create',
  component: PlayerCreateComponent
}, {
  path: 'player/edit/:id',
  component: PlayerEditComponent
}, {
  path: 'player/delete/:id',
  component: PlayerDeleteComponent
}, {
  path: 'player/detail/:id',
  component: PlayerDetailComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
