import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, debounceTime, takeUntil } from 'rxjs';

@Component({
  selector: 'app-debounce-time-example',
  templateUrl: './debounce-time-example.component.html',
  styleUrl: './debounce-time-example.component.scss',
})
export class DebounceTimeExampleComponent implements OnDestroy {
  public form = new FormGroup({
    text: new FormControl(''),
  });

  private destroy$ = new Subject<void>();

  public debounceTimeCounter = 0;
  public noDebouneTimeCounter = 0;

  constructor() {
    this.form.controls.text.valueChanges.pipe(
      takeUntil(this.destroy$),
    ).subscribe(
      () => this.noDebouneTimeCounter++,
    );
    this.form.controls.text.valueChanges.pipe(
      takeUntil(this.destroy$),
      debounceTime(500),
    ).subscribe(
      () => this.debounceTimeCounter++,
    );
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
