import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanlendarTaskComponent } from './canlendar-task.component';

describe('CanlendarTaskComponent', () => {
  let component: CanlendarTaskComponent;
  let fixture: ComponentFixture<CanlendarTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanlendarTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanlendarTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
