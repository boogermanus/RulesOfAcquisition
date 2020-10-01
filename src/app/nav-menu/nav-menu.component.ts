import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  isExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }
}
