import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  closePage(){
    this.router.navigate(['home/dashboard']);
  }

}
