import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './register.component';

const routes: Routes = [
  {
    'path': '',
    'component': RegisterComponent,
   
  },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    
  ], exports: [
    RouterModule,
  ], declarations: [
    RegisterComponent
  ],
  
})
export class RegisterModule {
}