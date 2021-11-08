import { Component, OnInit } from '@angular/core';
import { List } from 'immutable';

import { ListGenerator, EmployeeData } from './shared/list-generator.service';

import { Rnd } from './data/rnd-70-27-30';
import { Sales } from './data/sales-70-27-30';

const NumRange: [number, number] = [23, 28];

@Component({
  selector: 'app-root',
  template: `
    <app-employee-list
      [data]="salesList"
      department="Sales"
      (add)="salesList = add(salesList, $event)"
      (remove)="salesList = remove(salesList, $event)"
    ></app-employee-list>

    <app-employee-list
      [data]="rndList"
      department="R&D"
      (add)="rndList = add(rndList, $event)"
      (remove)="rndList = remove(rndList, $event)"
    ></app-employee-list>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  salesList: List<EmployeeData> = List(Sales);
  rndList: List<EmployeeData> = List(Rnd);
  label = '';

  constructor(private generator: ListGenerator) {}

  add(list: List<EmployeeData>, name: string) {
    return list.unshift({ label: name, num: this.generator.generateNumber(NumRange) });
  }

  remove(list: List<EmployeeData>, node: EmployeeData) {
    return list.splice(list.indexOf(node), 1);
  }
}
