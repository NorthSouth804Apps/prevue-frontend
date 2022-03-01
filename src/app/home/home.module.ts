import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from "./contianers/dashboard/dashboard.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
  ],
  providers: []
})
export class HomeModule {
}

