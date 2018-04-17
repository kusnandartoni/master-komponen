import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpandableHeaderPage } from './expandable-header';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ExpandableHeaderComponent } from '../../components/expandable-header/expandable-header';

@NgModule({
  declarations: [
    ExpandableHeaderPage,
    ExpandableHeaderComponent
  ],
  imports: [
    IonicPageModule.forChild(ExpandableHeaderPage),
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ExpandableHeaderPageModule {}
