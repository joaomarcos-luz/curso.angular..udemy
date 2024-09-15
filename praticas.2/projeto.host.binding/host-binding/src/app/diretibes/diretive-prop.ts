import { Directive, HostBinding } from "@angular/core";

@Directive ({
    selector: '[appDisabled]'
})

export class PropDisabled {
    @HostBinding('disabled') propDisabled = false
}