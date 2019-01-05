import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayListDetailPage } from './play-list-detail';

@NgModule({
  declarations: [
    PlayListDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayListDetailPage),
  ],
})
export class PlayListDetailPageModule {}
