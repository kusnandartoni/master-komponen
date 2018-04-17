import { NgModule } from '@angular/core';
import { ExpandableHeaderComponent } from './expandable-header/expandable-header';
import { ShrinkingSegmentHeaderComponent } from './shrinking-segment-header/shrinking-segment-header';
import { SmileRateComponent } from './smile-rate/smile-rate';
import { FlashCardComponent } from './flash-card/flash-card';
@NgModule({
	declarations: [ExpandableHeaderComponent,
    ShrinkingSegmentHeaderComponent,
    SmileRateComponent,
    FlashCardComponent],
	imports: [],
	exports: [ExpandableHeaderComponent,
    ShrinkingSegmentHeaderComponent,
    SmileRateComponent,
    FlashCardComponent]
})
export class ComponentsModule {}
