import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closePage(){
    this.router.navigate(['home/dashboard']);
  }

}
