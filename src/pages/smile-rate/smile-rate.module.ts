import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmileRatePage } from './smile-rate';
import { SmileRateComponentModule } from '../../components/smile-rate/smile-rate.module';

@NgModule({
  declarations: [
    SmileRatePage
  ],
  imports: [
    SmileRateComponentModule,
    IonicPageModule.forChild(SmileRatePage),
  ],
  exports:[
    SmileRatePage
  ]
})
export class SmileRatePageModule {}
