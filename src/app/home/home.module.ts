import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from "./contianers/dashboard/dashboard.component";
import { SharedModule } from "../../shared/shared.module";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../../environments/environment";


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: []
})
export class HomeModule {
}

