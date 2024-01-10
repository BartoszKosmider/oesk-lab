import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-list',
  templateUrl: './default-list.component.html',
  styleUrl: './default-list.component.scss',
})
export class DefaultListComponent {
  @Input()
  public dataSource: any;

  @Input()
  public displayedColumns: any;

  public isValueEven(value: number): boolean {
    console.log('Default component triggered!');

    return value % 2 === 0;
  }
}
