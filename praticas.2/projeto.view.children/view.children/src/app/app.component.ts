import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

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
  }

  eventColor(event: Event) {
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
}
