import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { List } from 'immutable';
import { EmployeeData } from '../../shared/list-generator.service';

const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

@Component({
  selector: 'app-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() data: List<EmployeeData> = List([]);
  @Output() remove = new EventEmitter<EmployeeData>();

  calculate(num: number) {
    return fibonacci(num);
  }
}
