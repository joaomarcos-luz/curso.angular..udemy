import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appInputColor]'
})

export class InputBackgroundColor {
    @Input('bgColor') appInputColor: string = 'white'
    @Input('tColor') textColor: string = 'black'

    @HostBinding('style.backgroundColor') bgColor = ''
    @HostBinding('style.color') color = ''

    @HostListener('focus')
    onFocus() {
        this.bgColor = this.appInputColor,
        this.color = this.textColor
    }

    @HostListener('blur')
    onBlur() {
        this.bgColor = 'white',
        this.color = 'black'
    }
}