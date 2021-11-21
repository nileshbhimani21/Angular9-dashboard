import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found.component';

const routes: Routes = [
  {
    'path': '',
    'component': PageNotFoundComponent,
   
  },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
    
  ], exports: [
    RouterModule,
  ], declarations: [
    PageNotFoundComponent
  ],
  
})
export class PageNotFoundModule {
}