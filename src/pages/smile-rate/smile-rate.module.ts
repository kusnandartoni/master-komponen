import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmileRatePage } from './smile-rate';
import { SmileRateComponent } from '../../components/smile-rate/smile-rate';

@NgModule({
  declarations: [
    SmileRatePage,
    SmileRateComponent    
  ],
  imports: [
    IonicPageModule.forChild(SmileRatePage),
  ],
  exports:[
    SmileRatePage
  ]
})
export class SmileRatePageModule {}
