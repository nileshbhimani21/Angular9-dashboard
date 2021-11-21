import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './index.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

const routes: Routes = [
  {
    'path': '',
    'component': IndexComponent,
   
  },
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    NgCircleProgressModule.forRoot()
    
  ], exports: [
    RouterModule,
  ], declarations: [
    IndexComponent
  ],
  
})
export class IndexModule {
}