import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';

import { EmployeeListComponent } from './employee-list.component';
import { NameInputComponent } from './name-input/name-input.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
  ],
  declarations: [EmployeeListComponent, NameInputComponent, ListComponent],
  exports: [EmployeeListComponent],
})
export class EmployeeListModule {}
