import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineJqwidgetsChartComponent } from './line-jqwidgets-chart.component';

describe('LineJqwidgetsChartComponent', () => {
  let component: LineJqwidgetsChartComponent;
  let fixture: ComponentFixture<LineJqwidgetsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineJqwidgetsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineJqwidgetsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
