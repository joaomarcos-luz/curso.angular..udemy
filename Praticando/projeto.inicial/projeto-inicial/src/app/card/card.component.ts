import { Component, ViewEncapsulation } from '@angular/core';

interface Iplano {
  infos: Iinfos
}

interface Iinfos {
  tipo: string
  preco: number
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
})

export class CardComponent {
  //@ts-ignore
  plano: Iplano = {
    infos: {
      tipo: "Simples",
      preco: 100
    }
}
}