import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footballercard',
  templateUrl: './footballercard.component.html',
  styleUrls: ['./footballercard.component.css']
})
export class FootballercardComponent implements OnInit {

  constructor() { }

  title = "Játékos";

  ngOnInit(): void {
  }

}
