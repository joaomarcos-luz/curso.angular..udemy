import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-roxo-button',
  templateUrl: './card-roxo-button.component.html',
  styleUrls: ['./card-roxo-button.component.scss']
})
export class CardRoxoButtonComponent {
  valueEmiter: boolean = true

  @Output('onButtonClick') onButtonClick = new EventEmitter<boolean>()

  buttonClick() {
    this.onButtonClick.emit(this.valueEmiter)
  }
}
