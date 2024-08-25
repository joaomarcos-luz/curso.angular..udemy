import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectPersonIndex: number | undefined

  listPeople = [
  {name: 'João Marcos', age: 27},
  {name: 'Paulo ricardo', age: 13},
  {name: 'Tainara Cristina', age: 24},
  {name: 'Hevyny Cristina', age: 21},
  ]

  selectPerson(index: number){
    console.log(index)

    this.selectPersonIndex = index
  }
}
