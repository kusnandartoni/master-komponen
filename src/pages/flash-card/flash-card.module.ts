import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlashCardPage } from './flash-card';
import { FlashCardComponent } from '../../components/flash-card/flash-card';

@NgModule({
  declarations: [
    FlashCardPage,
    FlashCardComponent
  ],
  imports: [
    IonicPageModule.forChild(FlashCardPage),
  ],
})
export class FlashCardPageModule {}
