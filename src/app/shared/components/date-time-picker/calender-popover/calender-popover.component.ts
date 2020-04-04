import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbPopover, NgbDatepicker, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calender-popover',
  templateUrl: './calender-popover.component.html',
  styleUrls: ['./calender-popover.component.scss']
})
export class CalenderPopoverComponent implements OnInit, AfterViewInit {

  @ViewChild(NgbDatepicker, {static: false}) public dp: NgbDatepicker;

  @ViewChild(NgbPopover, {static: false}) private popover: NgbPopover;

  @Output() componentIsReady: EventEmitter<CalenderPopoverComponent> = new EventEmitter();
  @Output() dateChange: EventEmitter<NgbDateStruct> = new EventEmitter();


  showTimePickerToggle = false;

  constructor() { }

  ngOnInit(): void {
    this.componentIsReady.emit(this);
  }

  ngAfterViewInit(): void {
    this.popover.hidden.subscribe($event => {
      this.showTimePickerToggle = false;
    });
  }

  toggleDateTimeState($event) {
    this.showTimePickerToggle = !this.showTimePickerToggle;
    $event.stopPropagation();
  }

  onDateChange($event: NgbDateStruct) {
    this.dateChange.emit($event);
  }

}
