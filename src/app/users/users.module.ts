import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from "./contianers/user-list/user-list.component";
import { SharedModule } from "../../shared/shared.module";
import { TableModule } from "primeng/table";
import { UserProfileComponent } from "./contianers/user-profile/user-profile.component";


@NgModule({
  declarations: [UserListComponent, UserProfileComponent],
  imports: [
    UsersRoutingModule,
    SharedModule,
    TableModule,
  ],
  providers: []
})
export class UsersModule {
}

