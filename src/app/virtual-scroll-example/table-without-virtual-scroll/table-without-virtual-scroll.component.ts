import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { IFibonacciListElement, fibonacci } from '../../shared/model/app.model';
import { MatTableDataSource } from '@angular/material/table';
import { Timer } from '../../shared/model/timer';
import * as _ from 'lodash';

@Component({
  selector: 'app-table-without-virtual-scroll',
  templateUrl: './table-without-virtual-scroll.component.html',
  styleUrl: './table-without-virtual-scroll.component.scss',
})
export class TableWithoutVirtualScrollComponent implements OnInit, AfterViewChecked {
  public fibonacci = fibonacci;
  public numberOfElements = 1000;
  public displayedColumns = ['index', 'value'];
  public dataSource = new MatTableDataSource<IFibonacciListElement>([]);
  public timer?: Timer;

  constructor() {
    this.generateValues();
  }

  public ngOnInit(): void {
    this.timer = new Timer('NotVirtualScroll');
  }

  public ngAfterViewChecked(): void {
    this.timer?.stop();
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
}
