import { Component, OnInit } from '@angular/core';
import { TreeNode } from "primeng/api";

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
      label: 'user',
    },
    {
      label: 'reported',
    },
    {
      label: 'log out'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }
}
