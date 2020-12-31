import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ImgFallbackDirective} from './directives/img-fallback.directive';
import {FaqComponent} from './components/faq/faq.component';
import {RegisterComponent} from './components/register/register.component';
import {ScheduleComponent} from './components/schedule/schedule.component';
import {SpeakerComponent} from './components/speaker/speaker.component';
import {AboutComponent} from './components/about/about.component';
import {IntroComponent} from './components/intro/intro.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ImgFallbackDirective,
    FaqComponent,
    RegisterComponent,
    ScheduleComponent,
    SpeakerComponent,
    AboutComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
