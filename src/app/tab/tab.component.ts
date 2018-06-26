import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less']
})
export class TabComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closePage(){
    this.router.navigate(['home/dashboard']);
  }
}
