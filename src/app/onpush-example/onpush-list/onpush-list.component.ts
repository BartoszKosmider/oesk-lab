import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-onpush-list',
  templateUrl: './onpush-list.component.html',
  styleUrl: './onpush-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushListComponent {
  @Input()
  public dataSource: any;

  @Input()
  public displayedColumns: any;

  public isValueEven(value: number): boolean {
    console.log('OnPush component triggered!');

    return value % 2 === 0;
  }
}
