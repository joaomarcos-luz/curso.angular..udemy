import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  buttonTitle = 'Texto do botão';
  buttonDisabled = true

  onButtonClick(){
    this.buttonTitle = "Texto Alteradooo"
    this.buttonDisabled = !this.buttonDisabled
  }
}
