import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'view.children';

  buttonList = [
    'botão 1',
    'botão 2',
    'botão 3',
  ]

  @ViewChildren('meuButton') 
  buttonEl!: QueryList<ElementRef<HTMLButtonElement>>

  ngAfterViewInit() {
    console.log(this.buttonEl)  

    this.buttonEl.changes.subscribe((result) => {
      console.log(result)
    })

  }

  changeColor(event: Event) {
    console.log(event)

    const btnElement = event.target as HTMLButtonElement

    btnElement.style.backgroundColor = 'orange'
  }

  resetButton() {
    this.buttonEl.forEach((btnEl) => {
      btnEl.nativeElement.style.backgroundColor = ''
      btnEl.nativeElement.style.color = 'black'
    })
  }

   first() {

    /* const primeiro = this.buttonEl.get(0) */

    /*const primeiro = this.buttonEl.find(btnEl => btnEl.nativeElement.className === "btn-0") */

    const primeiro = this.buttonEl.toArray()[0]

    console.log(primeiro)
  }

  remove() {
    this.buttonList.shift()
  }

}
