import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-basic-expansion-panel',
  templateUrl: './basic-expansion-panel.component.html',
  styleUrls: ['./basic-expansion-panel.component.css']
})
export class BasicExpansionPanelComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  panelOpenState: boolean = false;

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  closePage(){
    this.router.navigate(['home/dashboard']);
  }

}
