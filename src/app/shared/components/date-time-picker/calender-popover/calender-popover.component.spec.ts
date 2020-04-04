import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderPopoverComponent } from './calender-popover.component';

describe('CalenderPopoverComponent', () => {
  let component: CalenderPopoverComponent;
  let fixture: ComponentFixture<CalenderPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalenderPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
