import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { statesActions } from '../../../../core/state/core.actions';
import { environment } from '../../../../environments/environment';
import { filter } from 'rxjs';

@Component({
  selector: 'ts-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [],
})
export class SidebarComponent implements OnInit {
  display: boolean = true;
  sidebarOptions: TreeNode[] = [
    {
      label: 'home',
    },
    {
      label: 'analytics',
      expandedIcon: true,
      children: [
        {
          label: 'match data',
        },
        {
          label: 'users data',
        },
      ],
    },
    {
      label: 'users',
    },
    {
      label: 'reported',
    },
    {
      label: 'log out',
    },
  ];

  selectedOption = this.sidebarOptions[0];

  constructor(
    private router: Router,
    private store: Store,
    private activatedRoute: ActivatedRoute
  ) {}

  logOut() {
    const localState = JSON.parse(
      localStorage.getItem(environment.localStateKey) || '{}'
    );
    localState.auth = undefined;
    this.store.dispatch(statesActions.auth.post.success({ data: null }));
    localStorage.setItem(environment.localStateKey, JSON.stringify(localState));
    this.router.navigate(['login']);
  }

  onSelectSidebarOptions(option: { node: TreeNode }) {
    const { parent, children } = option.node;
    if (children) return;
    const label = option.node.label
      ? option.node.label.replace(/[ ]/gi, '-')
      : '';
    console.log(label, 'label');
    if (label === 'log-out') {
      this.logOut();
    } else if (parent) {
      this.router.navigate([`${parent.label}/${label}`]);
    } else {
      this.router.navigate([label]);
    }
  }

  ngOnInit(): void {
    this.autoSelectSidebarOption();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.autoSelectSidebarOption();
        // You only receive NavigationStart events
      });
  }

  autoSelectSidebarOption() {
    const path = location.pathname.replace('/', '');
    const parentPath = path.split('/')[0];
    this.sidebarOptions.forEach((item) => {
      if (parentPath === item.label) {
        if (item.children) {
          const subOptionLabel = path.split('/')[1];
          item.expanded = true;
          this.selectedOption =
            item.children.find(
              (option) => option.label === subOptionLabel.replace('-', ' ')
            ) || this.selectedOption;
        } else {
          this.selectedOption = item;
        }


      }
    });
  }
}
