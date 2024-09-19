import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appList]',
})

export class ListenerDirective {
    @HostListener('click')
    onClick() {
        console.log('Sabe onde é a casa do Jubileu?');
    } 

    @HostListener('keyup', ['$event', '"Meu argumento"'])
    onKeyup(event: KeyboardEvent, param2: string) {

        console.log(param2)
        
        const fullText = (event.target as HTMLInputElement).value

        console.log(fullText)
    }
}