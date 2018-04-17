import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbsoluteDragPage } from './absolute-drag';
import { AbsoluteDragDirective } from '../../directives/absolute-drag/absolute-drag';

@NgModule({
  declarations: [
    AbsoluteDragPage,
    AbsoluteDragDirective
  ],
  imports: [
    IonicPageModule.forChild(AbsoluteDragPage),
  ],
})
export class AbsoluteDragPageModule {}
