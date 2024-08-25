import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name: string = 'João'

  /* Esse metodo não é execultado por que o tho way data binding faz isso por baixo dos panos! */ 
  
  /* Estou usando esse metodo apenas pra deixar todas as letras digitadas em maiusculo. */
  handleInputChange(nomeDigitado: string){
    this.name = nomeDigitado.toUpperCase()
    console.log(this.name)
  }
}
