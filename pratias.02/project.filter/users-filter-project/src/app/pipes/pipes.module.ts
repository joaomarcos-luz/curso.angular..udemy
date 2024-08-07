import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { CommonModule } from "@angular/common";
import { AddressPipe } from './address.pipe';

@NgModule ({
    declarations: [
        PhonePipe,
        AddressPipe
  ],
  imports: [
        CommonModule
  ],
    exports: [
        PhonePipe,
        AddressPipe
    ],
})

export class PipesModule { }