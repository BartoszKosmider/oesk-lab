import { Component } from '@angular/core';

@Component({
  selector: 'app-memory-leak',
  templateUrl: './memory-leak.component.html',
  styleUrl: './memory-leak.component.scss',
})
export class MemoryLeakComponent {
  constructor() {
    this.createMemoryLeak();
  }

  private createMemoryLeak(): void {

  }
}
