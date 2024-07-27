import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-modulo.4';
  inputText: string = "Texto Inicial Alterado"
  inputType = "text"
  isDisabled = true

  enableInput(){
    this.isDisabled = false
  }

  disableInput(){
    this.isDisabled = true
  }

  setPasswordInput(){
    this.inputType = "password"
  }

  setTextInput(){
    this.inputType = "text"
  }

  logInputText(){
    console.log(this.inputType)
  }

  hendleInputKeyup(event: KeyboardEvent){
    const currentText = (event.target as HTMLInputElement).value
    console.log(currentText)
  }

  hendleInputEvent(event: Event){
    const correntText = (event.target as HTMLInputElement).value
    console.log(correntText)
  }

}
