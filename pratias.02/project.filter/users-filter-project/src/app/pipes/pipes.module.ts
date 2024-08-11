import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { CommonModule } from "@angular/common";
import { AddressPipe } from './address.pipe';
import { StatusPipe } from './status.pipe';
import { DashIfEmptyPipe } from './dash-if-empty.pipe';

@NgModule ({
    declarations: [
        PhonePipe,
        AddressPipe,
        StatusPipe,
        DashIfEmptyPipe
  ],
  imports: [
        CommonModule
  ],
    exports: [
        PhonePipe,
        AddressPipe,
        StatusPipe,
        DashIfEmptyPipe
    ],
})

export class PipesModule { }