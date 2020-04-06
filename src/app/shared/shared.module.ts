import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateTimePickerComponent } from './components/date-time-picker/date-time-picker.component';
import { CalenderPopoverComponent } from './components/date-time-picker/calender-popover/calender-popover.component';


@NgModule({
  declarations: [DateTimePickerComponent, CalenderPopoverComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DateTimePickerComponent,
    CalenderPopoverComponent
  ]
})
export class SharedModule { }
