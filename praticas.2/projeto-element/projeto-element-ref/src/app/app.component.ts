import { Component, ElementRef } from '@angular/core';
import { TesteService } from './services/teste.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor (
    private readonly _elRef: ElementRef,
    private readonly _testeService: TesteService
  ){}

  creatElement() {
    this._testeService.create(this._elRef)
  }
}
