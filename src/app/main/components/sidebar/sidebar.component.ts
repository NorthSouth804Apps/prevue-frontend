import { Component, OnInit } from '@angular/core';
import { TreeNode } from "primeng/api";
import { Router } from "@angular/router";

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

  constructor(private router: Router) {
  }

  onSelectSidebarOptions(option: { node: TreeNode }) {
    const { label } = option.node;
    this.router.navigate([label]);
  }

  ngOnInit(): void {
  }
}
