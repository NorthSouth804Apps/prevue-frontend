import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { HomeFacadeService } from "../../../../core/services/facades/home-facade.service";


@Component({
  selector: 'pv-home-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [],
})
export class DashboardComponent implements OnInit {
  display: boolean = true;
  recentReports$ = this.homeFacadeService.recentReports$;
  menuId$ = new BehaviorSubject<number>(0);
  listColumns: any[] = ['firstName', 'reportType'];

  constructor(public homeFacadeService: HomeFacadeService) {}

  ngOnInit(): void {
    this.homeFacadeService.getMatches();
    this.homeFacadeService.getReports();
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


// [
//   {
//     name: 'User 1232434',
//     reason: 'Spam',
//   },
//   {
//     name: 'User 1232434',
//     reason: 'Inappropriate Content',
//   },
//   {
//     name: 'User 1232434',
//     reason: 'Spam',
//   },
//   {
//     name: 'User 1232434',
//     reason: 'Spam',
//   },
//   {
//     name: 'User 1232434',
//     reason: 'Spam',
//   },
//   {
//     name: 'User 1232434',
//     reason: 'Spam',
//   },
//   {
//     name: 'User 1232434',
//     reason: 'Spam',
//   },
//   {
//     name: 'User 1232434',
//     reason: 'Spam',
//   },
//   {
//     name: 'User 1232434',
//     reason: 'Spam',
//   },
// ];
