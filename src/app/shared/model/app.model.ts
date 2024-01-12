export function fibonacci(value: number): number {
  return value < 2
    ? value
    : fibonacci(value - 1) + fibonacci(value - 2);
}

export interface IFibonacciListElement {
  index: number;
  value: number;
}

export interface ITest {
  name: string;
  age: number;
}

export class Test {
  name?: string;
  age?: number;
}
