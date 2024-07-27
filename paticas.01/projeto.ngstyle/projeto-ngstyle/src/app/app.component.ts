import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  fontSize: number = 15
  textColor: 'white' | 'orange' = 'white'
  buttonText: 'Branco' | 'Laranja' = 'Laranja'
  stylesString: string = 'font-size: 15px; color: white'
  styleObj = {
    'font-size': this.fontSize + 'px',
    'color': this.textColor,
  }

  increaseFontSize() {
    this.fontSize += 5
    
    this.stylesString =
     `font-size: ${this.fontSize}px; color: ${this.textColor};`

     this.styleObj = {
      'font-size': this.fontSize + 'px',
      'color': this.textColor,
    }
  }

  decreaseFontSize() {
    this.fontSize -= 5
    
    this.stylesString = 
      `font-size: ${this.fontSize}px; color: ${this.textColor};`

      this.styleObj = {
        'font-size': this.fontSize + 'px',
        'color': this.textColor,
      }
  }

  taggleFontColor(){
    if (this.textColor === 'white') {
      this.buttonText = "Branco"
      this.textColor = "orange"
    } else {
        this.buttonText = "Laranja"
        this.textColor = "white"
    }

    this.stylesString =
     `font-size: ${this.fontSize}px; color: ${this.textColor};`

     this.styleObj = {
      'font-size': this.fontSize + 'px',
      'color': this.textColor,
    }
    
  }

}
