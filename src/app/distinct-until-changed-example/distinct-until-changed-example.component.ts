import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import * as _ from 'lodash';
import { Subject, distinctUntilChanged, of, takeUntil } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed-example',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './distinct-until-changed-example.component.html',
  styleUrl: './distinct-until-changed-example.component.scss',
})
export class DistinctUntilChangedExampleComponent implements OnDestroy {
  public withoutDistinctUntilChanged$?: any;
  public withDistinctUntilChanged?: any;
  public withoutDistinctUntilChangedCount = 0;
  public withDistinctUntilChangedCount = 0;
  public values: number[] = [];

  private destroy$ = new Subject<void>();

  constructor() {
    const values = _.flatMap(_.range(100), this.duplicate);
    this.values = values;
    const stream$ = of(...values);

    this.withoutDistinctUntilChanged$ = stream$.pipe(
      takeUntil(this.destroy$),
    ).subscribe(() => this.withoutDistinctUntilChangedCount++);

    this.withoutDistinctUntilChanged$ = stream$.pipe(
      takeUntil(this.destroy$),
      distinctUntilChanged(),
    ).subscribe(() => this.withDistinctUntilChangedCount++);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private duplicate(value: number) {
    return [value, value];
  }
}
