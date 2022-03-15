import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  /* Google Analytics, add your own tag number
  constructor(private router: Router){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
          gtag('config', 'YOUR-TAG', 
                {
                  'page_path': event.urlAfterRedirects
                }
               );
       }
    }
    )
  }*/

  ngOnInit() {
    AOS.init();
  }
}

