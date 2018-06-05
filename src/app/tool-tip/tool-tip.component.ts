import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tool-tip',
  templateUrl: './tool-tip.component.html',
  styleUrls: ['./tool-tip.component.css']
})
export class ToolTipComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closePage(){
    this.router.navigate(['home/dashboard']);
  }

}
