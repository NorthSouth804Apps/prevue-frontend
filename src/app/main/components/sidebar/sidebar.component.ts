import { Component, OnInit } from '@angular/core';
import { TreeNode } from "primeng/api";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { statesActions } from "../../../../core/state/core.actions";
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'ts-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: []
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
          label: 'user data',
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
      label: 'log out'
    }
  ]

  constructor(private router: Router, private store: Store) {
  }


  logOut(){
    const localState = JSON.parse(localStorage.getItem(environment.localStateKey) || '{}');
    localState.auth = undefined;
    this.store.dispatch(statesActions.auth.post.success({ data: null }))
    localStorage.setItem(environment.localStateKey, JSON.stringify(localState));
    this.router.navigate(['login']);
  }

  onSelectSidebarOptions(option: { node: TreeNode }) {

    const { parent, children } = option.node;
    if(children) return;
    const label = option.node.label ? option.node.label.replace(/[ ]/gi, '-') : '';
    console.log(label, 'label');
    if(label === 'log-out') {
     this.logOut();
    } else if(parent) {
      this.router.navigate([`${parent.label}/${label}`]);
    } else {
      this.router.navigate([label]);
    }
  }

  ngOnInit(): void {
  }
}
