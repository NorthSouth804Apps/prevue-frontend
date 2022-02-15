import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchDataComponent } from "./contianers/match-data/match-data.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'match-data',
        component: MatchDataComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsRoutingModule {
}
