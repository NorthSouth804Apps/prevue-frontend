import { NgModule } from '@angular/core';
import { MatchDataComponent } from "./contianers/match-data/match-data.component";
import { SharedModule } from "../../shared/shared.module";
import { AnalyticsRoutingModule } from "./analytics-routing.module";
import { UserDataComponent } from "./contianers/user-data/user-data.component";

@NgModule({
  declarations: [MatchDataComponent, UserDataComponent],
  imports: [
    AnalyticsRoutingModule,
    SharedModule,
  ],
  providers: []
})
export class AnalyticsModule {
}

