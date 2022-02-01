import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from "./contianers/user-list/user-list.component";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [UserListComponent],
  imports: [
    UsersRoutingModule,
    SharedModule,
  ],
  providers: []
})
export class UsersModule {
}

