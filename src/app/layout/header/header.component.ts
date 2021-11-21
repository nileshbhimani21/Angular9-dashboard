import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from '../../_services/script-loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit , AfterViewInit{

  constructor(private _script:ScriptLoaderService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this._script.loadScripts('app-header',
      ['assets/js/sb-admin-2.min.js']);  
  }

}
