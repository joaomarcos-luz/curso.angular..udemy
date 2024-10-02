import { ElementRef, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class TesteService {

    /* constructor(private readonly _elRef: ElementRef){} */

    create(_elRef: ElementRef){
        const novaDiv = document.createElement('div')

        novaDiv.textContent = 'Nova Div!'
        novaDiv.classList.add('bg-red')

        _elRef.nativeElement.appendChild(novaDiv)
    }
}