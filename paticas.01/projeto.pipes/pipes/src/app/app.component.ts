import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pipes';

  text = 'João'
  
  pessoa = {
    name: 'João',
    status: 1,
  }

  pessoa2 = {
    name: 'Nelma',
    status: 2,
  }

  pessoa3 = {
    name: 'Ricardo',
    status: 3,
  }

}
