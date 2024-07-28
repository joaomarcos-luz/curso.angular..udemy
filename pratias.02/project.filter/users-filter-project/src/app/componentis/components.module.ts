import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetailComponent } from './user-detail/user-detail.component'

@NgModule ({
    declarations: [
    UserDetailComponent
  ],
    imports: [
        AngularMaterialModule,
    ],
    exports: [
        AngularMaterialModule,
        UserDetailComponent
    ],
})

export class ComponentsModule {}