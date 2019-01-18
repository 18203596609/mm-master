import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { IconDefinition } from '@ant-design/icons-angular';
import { NgZorroAntdModule } from 'ng-zorro-antd'; // 引入ng-zorro
// 引入你需要的图标，比如你需要 fill 主题的 AccountBook Alert 和 outline 主题的 Alert，推荐 ✔️
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';


import { AppComponent } from './app.component';
import { HeadComponent } from './component/head/head.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { LeftContentComponent } from './component/left-content/left-content.component';
import { CenterContentComponent } from './component/center-content/center-content.component';
import { RightContentComponent } from './component/right-content/right-content.component';
import { ChleftOneComponent} from './component/chleft-one/chleft-one.component';
import { QsHandComponent } from './component/qs-hand/qs-hand.component';
import { IntroComponent } from './component/intro/intro.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    HomePageComponent,
    LeftContentComponent,
    CenterContentComponent,
    QsHandComponent,
    IntroComponent,
    RightContentComponent,
    ChleftOneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    /**,
    AppRoutingModule 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule.forRoot()
  ],
  providers   : [],
  bootstrap: [AppComponent]
})
export class AppModule { }
