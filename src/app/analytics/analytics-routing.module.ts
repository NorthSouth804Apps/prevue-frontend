import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchDataComponent } from "./contianers/match-data/match-data.component";
import { UserDataComponent } from "./contianers/user-data/user-data.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'match-data',
        component: MatchDataComponent,
      },
      {
        path: 'users-data',
        component: UserDataComponent,
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
