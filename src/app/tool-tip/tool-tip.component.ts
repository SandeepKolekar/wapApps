import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material';
@Component({
  selector: 'app-tool-tip',
  templateUrl: './tool-tip.component.html',
  styleUrls: ['./tool-tip.component.less']
})
export class ToolTipComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closePage(){
    this.router.navigate(['home/dashboard']);
  }

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

}
