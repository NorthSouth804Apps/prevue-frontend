import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from "./contianers/dashboard/dashboard.component";
import { SharedModule } from "../../shared/shared.module";
import { HomeFacadeService } from "../../core/services/facades/home-facade.service";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
  ],
  providers: [HomeFacadeService]
})
export class HomeModule {
}

