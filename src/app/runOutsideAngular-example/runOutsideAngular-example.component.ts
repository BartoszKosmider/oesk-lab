import { Component, AfterViewChecked, ViewChild } from '@angular/core';
import { IFibonacciListElement, fibonacci } from '../shared/model/app.model';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';
import { NgZone } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-run-outside-angular-example',
  templateUrl: './runOutsideAngular-example.component.html',
  styleUrl: './runOutsideAngular-example.component.scss',
})
export class RunOutsideAngularExampleComponent {
  public availableColors = ['red', 'blue', 'green', 'pink', 'black', 'yellow', 'white', 'gray', 'orange', 'aqua'];

  @ViewChild('container')
  public container: any;

  constructor(
    private ngZone: NgZone
  ) {

    // setInterval(() => {
    //   this.container.nativeElement.style.backgroundColor = this.getRandomColor();
    // }, 100);

    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.container.nativeElement.style.backgroundColor = this.getRandomColor();
      }, 100);
    });
  }

  public generateValue(): number {
    const random = _.random(40);
    console.log('Generate number!')

    return fibonacci(random);
  }

  public getRandomColor(): string {
    const arrLength = this.availableColors.length;
    const randomValue = _.random(arrLength);
    return this.availableColors[randomValue];
  }
}
