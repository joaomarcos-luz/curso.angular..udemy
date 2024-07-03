import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  @Input({ required: true }) personName: string = ""
  @Input({ required: true }) personAge: number = 0
  @Input({ required: true }) personIndex: number = 0
  @Input({ required: true }) isOdd: boolean = false
  @Input({ required: true }) isFirst: boolean = false
  @Input({ required: true }) isLast: boolean = false
  @Input({ required: true }) isSelect: boolean = false

  @Output('personSelect') onpersonSelectEmitt = new EventEmitter<number>()

  selectPerson(){
    this.onpersonSelectEmitt.emit(this.personIndex)
  }

}
