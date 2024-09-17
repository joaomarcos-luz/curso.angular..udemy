import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: '[appStyle]'
})

export class StyleDirectives {
    /* @HostBinding('attr.style') attrStyle = 'background-color: blue; color: black' */

   /*  @HostBinding('style') propStyle = 'background-color: blue; color: black' */

/* @HostBinding('style') objStyle = {
    backgroundColor: 'blue',
    color: 'black',
}
 */

   /*  @HostBinding('style.backgroundColor') bgStyle = 'blue';
    @HostBinding('style.color') clStyle = 'pink';
 */

    @HostBinding('style.fontSize.px') size = 50;

}