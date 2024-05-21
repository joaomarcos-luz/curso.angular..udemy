import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {
  @Output() buttonClickEmiter = new EventEmitter()

  onButtonClick() {
    console.log('onButtonEmiter')

    this.buttonClickEmiter.emit()
  }
}