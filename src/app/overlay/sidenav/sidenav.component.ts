import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input() toggleSideBar: boolean = false;

  expansionPanelHeaderHeight = '48px';

  constructor() { }

  ngOnInit(): void {
  }

  isShowing: boolean = false;

toggleSidenav() {
   this.isShowing = !this.isShowing;
}

callMethods() {
    this.toggleSidenav();
}

}
