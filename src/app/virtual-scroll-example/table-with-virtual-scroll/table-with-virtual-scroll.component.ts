import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { IFibonacciListElement, fibonacci } from '../../shared/model/app.model';
import * as _ from 'lodash';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { Timer } from '../../shared/model/timer';

@Component({
  selector: 'app-table-with-virtual-scroll',
  templateUrl: './table-with-virtual-scroll.component.html',
  styleUrl: './table-with-virtual-scroll.component.scss',
})
export class TableWithVirtualScrollComponent implements OnInit, AfterViewChecked {
  public fibonacci = fibonacci;
  public numberOfElements = 1000;
  public displayedColumns = ['index', 'value'];
  public dataSource = new TableVirtualScrollDataSource<IFibonacciListElement>([]);
  private timer?: Timer;

  constructor() {
    this.generateValues();
  }

  public ngOnInit(): void {
    this.timer = new Timer('VirtualScroll');
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
