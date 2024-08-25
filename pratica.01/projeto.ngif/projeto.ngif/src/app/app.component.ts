import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  minhaProp: boolean = true
  pessoa: any = {
    status: 1,
    nane: 0,
    endereco: {
      rua: 0
    }
  }

  taggleProp(){
    this.minhaProp = !this.minhaProp
  }

  isTruthy(){
    //return {}
    //return []
    //return true
    //return 1 
    //return "teste"
    //return "0"
    //return "false"
    //return this.pessoa.status
  }

  isFalsy(){
    //return false
    //return 0
    //return ""
    //return null
    //return undefined
    //return -0
    //return Nan
    //return
    //return this.pessoa.nane
    return this.pessoa.endereco.rua 
  }
}
