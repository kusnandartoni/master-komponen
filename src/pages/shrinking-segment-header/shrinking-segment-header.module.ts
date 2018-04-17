import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShrinkingSegmentHeaderPage } from './shrinking-segment-header';
import { ShrinkingSegmentHeaderComponent } from '../../components/shrinking-segment-header/shrinking-segment-header';

@NgModule({
  declarations: [
    ShrinkingSegmentHeaderPage,
    ShrinkingSegmentHeaderComponent
  ],
  imports: [
    IonicPageModule.forChild(ShrinkingSegmentHeaderPage),
  ],
  exports:[
    ShrinkingSegmentHeaderPage
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ShrinkingSegmentHeaderPageModule {}
