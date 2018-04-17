import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedSourceComponent } from './unauthorized-source.component';

describe('UnauthorizedSourceComponent', () => {
  let component: UnauthorizedSourceComponent;
  let fixture: ComponentFixture<UnauthorizedSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthorizedSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorizedSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
