import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-xss',
  templateUrl: './xss.component.html',
  styleUrl: './xss.component.scss'
})

export class XssComponent {

  constructor(
    private readonly _Eref: ElementRef,
    private readonly _render2: Renderer2,
  ){}

  criateElement(inputText: string) {
    const eDiv = document.createElement('div')

    eDiv.innerHTML = inputText

    this._Eref.nativeElement.appendChild(eDiv)
  }

  criateElementCorrect(inputText: string) {
    const correctDiv = this._render2.createElement('div')

    const text = this._render2.createText(inputText)

    this._render2.appendChild(correctDiv, text)
    this._render2.setStyle(correctDiv, 'color', 'blue')
    this._render2.addClass(correctDiv, 'bg-red')

    this._render2.appendChild(this._Eref.nativeElement, correctDiv)

    const novaDiv = document.createElement('div')
    novaDiv.textContent = 'Sou nova div!'
    this._render2.addClass(novaDiv, 'bg-blue')
    this._render2.appendChild(this._Eref.nativeElement, novaDiv)
  }

}
