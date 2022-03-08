import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from "rxjs";
import { HomeFacadeService } from "../../../../core/services/facades/home-facade.service";
import { MatchModel } from "../../../../core/models";

@Component({
  selector: 'pv-home-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [],
})
export class DashboardComponent implements OnInit {
  display: boolean = true;
  dataList = [
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Inappropriate Content',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
    {
      name: 'User 1232434',
      reason: 'Spam',
    },
  ];
  menuId$ = new BehaviorSubject<number>(0);
  listColumns: any[] = ['name', 'reason'];

  constructor(public homeFacadeService: HomeFacadeService) {}

  ngOnInit(): void {
    this.homeFacadeService.getMatches();
    this.homeFacadeService.matchesStats$.subscribe((data: MatchModel[]) => {
      console.log(data, 'matches');
    })
  }

  selectCard(item: any) {
    console.log('clicked', item);
    this.menuId$.next(item.id)
  }



  setColor(index: number): any {
    if ((index / 2).toString().includes('.')) {
      return 'blue-2';
    } else {
      return 'rose';
    }
  }
}
