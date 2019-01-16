import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeadComponent } from './component/head/head.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { LeftContentComponent } from './component/left-content/left-content.component';
import { CenterContentComponent } from './component/center-content/center-content.component';
import { RightContentComponent } from './component/right-content/right-content.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HomePageComponent,
    LeftContentComponent,
    CenterContentComponent,
    RightContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
