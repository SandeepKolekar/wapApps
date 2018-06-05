import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})


export class BottomSheetComponent implements OnInit {

  constructor(private router: Router, private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }
  closePage(){
    this.router.navigate(['home/dashboard']);
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
