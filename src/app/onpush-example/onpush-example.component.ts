import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';
import { fibonacci, IFibonacciListElement } from '../shared/model/app.model';
import { Timer } from '../shared/model/timer';

@Component({
  selector: 'app-onpush-example',
  templateUrl: './onpush-example.component.html',
  styleUrl: './onpush-example.component.scss',
})
export class OnpushExampleComponent {
  public fibonacci = fibonacci;
  public numberOfElements = 10;
  public displayedColumns = ['index', 'value'];
  public dataSource = new MatTableDataSource<IFibonacciListElement>([]);
  public timer?: Timer;

  constructor() {
    this.generateValues();
  }

  public getValue(): number {
    const random = _.random(1, 10);
    return this.fibonacci(random);
  }

  public generateValues(): void {
    const fibonacciListElements = [];
    for (let index = 0; index < this.numberOfElements; index++) {
      fibonacciListElements.push({
        index: index,
        value: this.getValue(),
      });
    }

    this.dataSource.data = fibonacciListElements;
  }

  public addNewItem(): void {
    const data = this.dataSource.data;
    data.push({
      index: this.dataSource.data.length,
      value: this.getValue(),
    });
    this.dataSource.data = data;
  }
}
