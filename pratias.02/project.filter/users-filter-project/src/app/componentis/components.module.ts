import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FilterComponent } from './filter/filter.component'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule ({
    declarations: [
    UserDetailComponent,
    FilterComponent,
    UsersListComponent
  ],
    imports: [
        AngularMaterialModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        AngularMaterialModule,
        UserDetailComponent,
        FilterComponent,
        FormsModule,
        UsersListComponent
    ],
})

export class ComponentsModule {
}