import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  widthButton1 = '110px'
  widthButton2 = '130'

  objStyleButton5 = {
    width: '170px', 
    backgroundColor: 'green'
  }

  updateStyleButton5() {
    this.objStyleButton5.backgroundColor = "blue";
    this.objStyleButton5.width = "100px";
  }

  updateStyleButton5Corret() {
    this.objStyleButton5 = {
      backgroundColor: "orange",
      width: "180px",
    }
  }

  updaWidthButton2(){
    this.widthButton2 = '200'
  }

}
