import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';
import { IFibonacciListElement, fibonacci } from '../shared/model/app.model';

@Component({
  selector: 'app-pure-pipes',
  templateUrl: './pure-pipes.component.html',
  styleUrl: './pure-pipes.component.scss',
})
export class PurePipesComponent {
  public fibonacci = fibonacci;
  public numberOfElements = 100;
  public displayedColumns = ['index', 'value'];
  public dataSource = new MatTableDataSource<IFibonacciListElement>([]);

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

  public isValueEven(value: number): boolean {
    console.log('Template method triggered!');

    return value % 2 === 0;
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
