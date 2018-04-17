import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpandableHeaderPage } from './expandable-header';

@NgModule({
  declarations: [
    ExpandableHeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpandableHeaderPage),
  ],
})
export class ExpandableHeaderPageModule {}
