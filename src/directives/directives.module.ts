import { NgModule } from '@angular/core';
import { OverslideDirective } from './overslide/overslide';
import { ParallaxHeaderDirective } from './parallax-header/parallax-header';
import { AbsoluteDragDirective } from './absolute-drag/absolute-drag';
@NgModule({
	declarations: [OverslideDirective,
    ParallaxHeaderDirective,
    AbsoluteDragDirective],
	imports: [],
	exports: [OverslideDirective,
    ParallaxHeaderDirective,
    AbsoluteDragDirective]
})
export class DirectivesModule {}
