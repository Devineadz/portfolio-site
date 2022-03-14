import { Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;

  constructor() { }

  ngOnInit(): void {

  }

  
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }


}
