import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  closePage(){
    this.router.navigate(['home/dashboard']);
  }

}
