import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StandardScrollingPage } from './standard-scrolling';

@NgModule({
  declarations: [
    StandardScrollingPage,
  ],
  imports: [
    IonicPageModule.forChild(StandardScrollingPage),
  ],
})
export class StandardScrollingPageModule {}
