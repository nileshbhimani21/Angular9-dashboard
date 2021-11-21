import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ForgotComponent} from './forgot.component';

const routes: Routes = [
  {
    'path': '',
    'component': ForgotComponent,
   
  },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    
  ], exports: [
    RouterModule,
  ], declarations: [
    ForgotComponent
  ],
  
})
export class ForgotModule {
}