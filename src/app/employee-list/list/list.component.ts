import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { List } from 'immutable';
import { EmployeeData } from '../../shared/list-generator.service';

@Component({
  selector: 'app-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() data: List<EmployeeData> = List([]);
  @Output() remove = new EventEmitter<EmployeeData>();
}
