import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter: number = 0;

  constructor() { }

  getCounter(){
    return this.counter;
  }

  setCounter(newCounter: number){
    this.counter = newCounter;
  }
}
