import { CounterService } from './../../core/services/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private counterService: CounterService, private CounterService: CounterService) { }

  ngOnInit(): void {;
  }

  plusCounter(){
    this.counterService.counter = this.counterService.counter + 1;
    console.log(this.counterService.counter);
  }}
