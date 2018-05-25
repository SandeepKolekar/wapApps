import { Component, OnInit , ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-http-data-table',
  templateUrl: './http-data-table.component.html',
  styleUrls: ['./http-data-table.component.css']
})
export class HttpDataTableComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  closePage(){
    this.router.navigate(['home/dashboard']);
  }


}
