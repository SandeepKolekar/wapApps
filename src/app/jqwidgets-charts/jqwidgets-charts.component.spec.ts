import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqwidgetsChartsComponent } from './jqwidgets-charts.component';

describe('JqwidgetsChartsComponent', () => {
  let component: JqwidgetsChartsComponent;
  let fixture: ComponentFixture<JqwidgetsChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqwidgetsChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqwidgetsChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
