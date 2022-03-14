import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  // states of job descriptions
  hideSTA = false;
  hideJonar = false;
  hidePTW = false;
  hideMixtiles = false;
  hideKW = false;
  hideOther = false;

  constructor() { }

  ngOnInit(): void {
  }

  // toggles for job description states
  toggleSTA(){
    this.hideSTA = !this.hideSTA;
  }

  toggleJonar(){
    this.hideJonar = !this.hideJonar;
  }

  toggleMixtiles(){
    this.hideMixtiles = !this.hideMixtiles;
  }

  togglePTW(){
    this.hidePTW = !this.hidePTW;
  }

  toggleKW(){
    this.hideKW = !this.hideKW;
  }

  toggleOther(){
    this.hideOther = !this.hideOther;
  }





}
