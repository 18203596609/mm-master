import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CenterContentComponent } from './component/center-content/center-content.component';
import { RightContentComponent } from './component/right-content/right-content.component';
import {HomePageComponent} from './component/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'jianjie', component: CenterContentComponent },
  { path: 'a', component: RightContentComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {
}
