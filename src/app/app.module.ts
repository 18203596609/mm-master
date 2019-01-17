import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd'; // 引入ng-zorro


import { AppComponent } from './app.component';
import { HeadComponent } from './component/head/head.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { LeftContentComponent } from './component/left-content/left-content.component';
import { CenterContentComponent } from './component/center-content/center-content.component';
import { RightContentComponent } from './component/right-content/right-content.component';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);


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
    BrowserModule,
    BrowserAnimationsModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule.forRoot()
  ],
  providers   : [],
  bootstrap: [AppComponent]
})
export class AppModule { }
