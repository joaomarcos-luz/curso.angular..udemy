import { Component, ElementRef, ViewChild} from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'view.child';

  @ViewChild('meuInput')
  meuInputEL!: ElementRef<HTMLInputElement>

  uppdateInput() {
    this.meuInputEL.nativeElement.value = "Input Atualizado"
  }

  focus() {
    this.meuInputEL.nativeElement.focus()
  }

  @ViewChild("minhaDiv") minhaDivEL!: ElementRef<HTMLDivElement>
  
  uppdateDiv() {
    this.minhaDivEL.nativeElement.textContent = "Conteudo da Div atualizado!"
  }

  @ViewChild("filhoComp") 
  filhoCompRef!: FilhoComponent

  hello() {
    this.filhoCompRef.dizerOi()
    this.filhoCompRef.message = "Eu disse Oi!"
  }
}
