import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})


export class BottomSheetComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  closePage(){
    this.router.navigate(['home/dashboard']);
  }

}
