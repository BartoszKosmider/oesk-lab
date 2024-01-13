import { Component, OnDestroy } from '@angular/core';
import { interval, takeUntil, Subject } from 'rxjs';
import { fibonacci } from '../shared/model/app.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-memory-leak',
  templateUrl: './memory-leak.component.html',
  styleUrl: './memory-leak.component.scss',
})
export class MemoryLeakComponent implements OnDestroy {

  public memoryLeakValues: number[] = [];

  private destroy$ = new Subject<void>();

  constructor() {
    this.createMemoryLeak();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private createMemoryLeak(): void {
    interval(100).pipe(
      // takeUntil(this.destroy$),
    ).subscribe(() => {
      const value = fibonacci(_.random(40))
      this.memoryLeakValues.push(value);
    });
  }
}
