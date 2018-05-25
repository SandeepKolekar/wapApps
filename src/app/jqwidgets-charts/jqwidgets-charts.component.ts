import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jqwidgets-charts',
  templateUrl: './jqwidgets-charts.component.html',
  styleUrls: ['./jqwidgets-charts.component.css']
})
export class JqwidgetsChartsComponent implements OnInit {
  values: number[] = [102, 115, 130, 137];
  constructor() { }

  ngOnInit() {
  }
}
