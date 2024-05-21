import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {
  propTeste: boolean = false
  @Output('buttonClickEmitter') buttonClickEmitter = new EventEmitter<boolean>()

  onButtonClick() {
    console.log('onButtonEmiter')

    this.buttonClickEmitter.emit(this.propTeste)
  }
}