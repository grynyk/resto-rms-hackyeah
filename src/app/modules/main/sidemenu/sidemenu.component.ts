import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  menuItems: { icon: string, text: string, url: string, children?: any }[] = [
    { 'icon': 'home', 'text': 'Home', 'url': '', 'children': [] },
    { 'icon': 'group_work', 'text': 'Tables', 'url': '/service', 'children': []  },
    { 'icon': 'shop_two', 'text': 'Inventory', 'url': '/inventory', 'children': [] },
    { 'icon': 'assignment_ind', 'text': 'Reports', 'url': '#', 'children': []  },
    { 'icon': 'info', 'text': 'Support', 'url': '#', 'children': []  }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}
}