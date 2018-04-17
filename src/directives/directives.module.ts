import { NgModule } from '@angular/core';
import { OverslideDirective } from './overslide/overslide';
import { ParallaxHeaderDirective } from './parallax-header/parallax-header';
@NgModule({
	declarations: [OverslideDirective,
    ParallaxHeaderDirective],
	imports: [],
	exports: [OverslideDirective,
    ParallaxHeaderDirective]
})
export class DirectivesModule {}
