import { NgModule } from '@angular/core';
import { ExpandableHeaderComponent } from './expandable-header/expandable-header';
import { ShrinkingSegmentHeaderComponent } from './shrinking-segment-header/shrinking-segment-header';
import { SmileRateComponent } from './smile-rate/smile-rate';
@NgModule({
	declarations: [ExpandableHeaderComponent,
    ShrinkingSegmentHeaderComponent,
    SmileRateComponent],
	imports: [],
	exports: [ExpandableHeaderComponent,
    ShrinkingSegmentHeaderComponent,
    SmileRateComponent]
})
export class ComponentsModule {}
