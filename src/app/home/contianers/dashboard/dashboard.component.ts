import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HomeFacadeService } from '../../../../core/services/facades/home-facade.service';
import { IStats } from '../../../../core/models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'pv-home-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [],
})
export class DashboardComponent implements OnInit {
  display: boolean = true;
  recentReports$ = this.homeFacadeService.recentReports$;
  matchesStatsSummary$ = this.homeFacadeService.matchesStats$.pipe(
    map((item) => item.summary)
  );
  listColumns: any[] = ['firstName', 'reportType'];
  loading$ = this.homeFacadeService.loading$;
  get allUserStats(): Observable<IStats[]> {
    return this.homeFacadeService.userStats$.pipe(
      map((stat) => stat.allUsers || [])
    );
  }
  get activeUserStats(): Observable<IStats[]> {
    return this.homeFacadeService.userStats$.pipe(
      map((stat) => stat.activeUsers || [])
    );
  }

  constructor(private homeFacadeService: HomeFacadeService) {}

  ngOnInit(): void {
    this.homeFacadeService.getMatchesStats();
    this.homeFacadeService.getReports();
    this.homeFacadeService.getUsersStats();

    // testing
    this.matchesStatsSummary$.subscribe((item) => console.log('match stats', item));
  }
}
