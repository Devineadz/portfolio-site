import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  // states of active cards
  webActive = true;
  webHover = false;
  vacationHover = false;
  properteaHover = false;
  compilerHover = false;
  restoreHover = false;
  filterHover = false;
  pythonwebHover = false;
  icHover = false;
  donytaHover = false;
  graphicsHover = false;

  // states of active chips
  project1Active = false;
  gameActive = true;
  otherActive = true;
  cPlusPlusActive = true;
  pythonActive = true;
  javaScriptActive = true;
  cSharpActive = true;
  allCategories = true;
  allLanguages = true;

  constructor() { }

  ngOnInit(): void {
  }

  // toggles for chip states
  toggleWeb(){
    this.webActive = !this.webActive;
    this.allCategories = false;
  }

  toggleGame(){
    this.gameActive = !this.gameActive;
    this.allCategories = false;
  }

  toggleOther(){
    this.otherActive = !this.otherActive;
    this.allCategories = false;
  }

  togglecPlusPlus(){
    this.cPlusPlusActive = !this.cPlusPlusActive;
    this.allCategories = false;
  }

  togglePython(){
    this.pythonActive = !this.pythonActive;
    this.allCategories = false;
  }

  toggleJavaScript(){
    this.javaScriptActive = !this.javaScriptActive;
    this.allCategories = false;
  }

  toggleCSharp(){
    this.cSharpActive = !this.cSharpActive;
    this.allCategories = false;
  }

  toggleAllCategories(){
    if(this.allCategories){
      this.allCategories = false;
      this.webActive = false;
      this.gameActive = false;
      this.otherActive = false;
      this.cPlusPlusActive = false;
      this.pythonActive = false;
      this.javaScriptActive = false;
      this.cSharpActive = false;
    } else {
      this.allCategories = true;
      this.webActive = true;
      this.gameActive = true;
      this.otherActive = true;
      this.cPlusPlusActive = true;
      this.pythonActive = true;
      this.javaScriptActive = true;
      this.cSharpActive = true;
    }
  }
}
