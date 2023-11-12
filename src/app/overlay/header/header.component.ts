import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() 
  toggleSideBar: EventEmitter<any> = new EventEmitter();

  constructor() { }

  title = "FOOTSTARS";

  ngOnInit(): void {
  }

  onClickToggleSideBar = () => {
    this.toggleSideBar.emit();
  }

}
