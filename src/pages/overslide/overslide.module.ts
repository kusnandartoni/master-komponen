import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OverslidePage } from './overslide';
import { OverslideDirective } from '../../directives/overslide/overslide';

@NgModule({
  declarations: [
    OverslidePage,
    OverslideDirective
  ],
  imports: [
    IonicPageModule.forChild(OverslidePage),
  ],
  exports:[
    OverslidePage
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class OverslidePageModule {}
