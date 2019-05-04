import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru-KZ';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BwitComponent } from './bwit/bwit.component';
import { BwitsTimelineComponent } from './bwits-timeline/bwits-timeline.component';
import { TagPipe } from './pipes/tag.pipe';
import { BwitCreateComponent } from './bwit-create/bwit-create.component';

@NgModule({
  declarations: [
    AppComponent,
    BwitComponent,
    BwitsTimelineComponent,
    TagPipe,
    BwitCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localeRu);
