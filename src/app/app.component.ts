import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'something';
  openSidenav = false;

  constructor(){}




}
