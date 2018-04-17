import { NgModule } from '@angular/core';
import { ExpandableHeaderComponent } from './expandable-header/expandable-header';
import { ShrinkingSegmentHeaderComponent } from './shrinking-segment-header/shrinking-segment-header';
@NgModule({
	declarations: [ExpandableHeaderComponent,
    ShrinkingSegmentHeaderComponent],
	imports: [],
	exports: [ExpandableHeaderComponent,
    ShrinkingSegmentHeaderComponent]
})
export class ComponentsModule {}
