import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoTiltPage } from './photo-tilt';
import { PhotoTiltComponent } from '../../components/photo-tilt/photo-tilt';

@NgModule({
  declarations: [
    PhotoTiltPage,
    PhotoTiltComponent
  ],
  imports: [
    IonicPageModule.forChild(PhotoTiltPage),
  ],
})
export class PhotoTiltPageModule {}
