import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParallaxHeaderPage } from './parallax-header';
import { ParallaxHeaderDirective } from '../../directives/parallax-header/parallax-header';

@NgModule({
  declarations: [
    ParallaxHeaderPage,
    ParallaxHeaderDirective
  ],
  imports: [
    IonicPageModule.forChild(ParallaxHeaderPage),
  ],
  exports:[
    ParallaxHeaderPage
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ParallaxHeaderPageModule {}
