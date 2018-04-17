import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from './global/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    private router: Router,
    private GlobalService: GlobalService
  ) { }

  ngOnInit() {
  }
}
