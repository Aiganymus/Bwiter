import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BwitComponent } from './bwit/bwit.component';
import { BwitsTimelineComponent } from './bwits-timeline/bwits-timeline.component';
import { TagPipe } from './pipes/tag.pipe';
import { CreateComponent } from '../shared/create/create.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BwitComponent,
    BwitsTimelineComponent,
    TagPipe,
    CreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    BwitComponent,
    BwitsTimelineComponent,
    TagPipe,
  ]
})
export class BwitsModule { }
