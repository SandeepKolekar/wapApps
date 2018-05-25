import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDataTableComponent } from './http-data-table.component';

describe('HttpDataTableComponent', () => {
  let component: HttpDataTableComponent;
  let fixture: ComponentFixture<HttpDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
