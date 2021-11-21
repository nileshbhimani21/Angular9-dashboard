import { Component, OnInit, AfterViewInit } from '@angular/core';

declare let $:any

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    if($(window).width() < 1279){
      $('.m-click').click(function(){
        $('#sidebarToggleTop').click();
      })
    } else{
      
    }
    
  }
}
