import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-unauthorized-source',
  templateUrl: './unauthorized-source.component.html',
  styleUrls: ['./unauthorized-source.component.less']
})
export class UnauthorizedSourceComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
