import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name: string = "Név";
  username: string = "Felhasználónév";
  wins: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
