import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { List } from 'immutable';

import { EmployeeData } from '../shared/list-generator.service';

@Component({
  selector: 'app-employee-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 title="Department">{{ department }}</h1>
    <app-name-input (add)="add.emit($event)"></app-name-input>
    <app-list (remove)="remove.emit($event)" [data]="data"></app-list>
  `,
  styleUrls: ['employee-list.component.css']
})
export class EmployeeListComponent {
  @Input() data: List<EmployeeData> = List([]);
  @Input() department = '';

  @Output() remove = new EventEmitter<EmployeeData>();
  @Output() add = new EventEmitter<string>();
}
