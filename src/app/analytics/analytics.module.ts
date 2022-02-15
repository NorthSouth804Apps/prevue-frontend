import { NgModule } from '@angular/core';
import { MatchDataComponent } from "./contianers/match-data/match-data.component";
import { SharedModule } from "../../shared/shared.module";
import { AnalyticsRoutingModule } from "./analytics-routing.module";

@NgModule({
  declarations: [MatchDataComponent],
  imports: [
    AnalyticsRoutingModule,
    SharedModule,
  ],
  providers: []
})
export class AnalyticsModule {
}

