import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {
  propTeste: boolean = false

  @Input({alias: 'buttonDisabled', transform: booleanAttribute }) buttonDisabled: boolean = false
  
  @Output('buttonClickEmitter') buttonClickEmitter = new EventEmitter<boolean>()

  onButtonClick() {
    console.log('onButtonEmiter')

    this.buttonClickEmitter.emit(this.propTeste)
  }
}