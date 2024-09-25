import { AfterViewInit, Directive, ElementRef} from "@angular/core";

@Directive({
    selector: '[appFocusDirective]'
})

export class FocusInputDirective  implements AfterViewInit {

    constructor(private _elRef: ElementRef){}

       ngAfterViewInit(){
        const inputList = this._elRef.nativeElement.querySelectorAll('input') as NodeListOf<HTMLInputElement>

        if (inputList.length > 1) {
            inputList[1].focus()
        }
        
       }
}