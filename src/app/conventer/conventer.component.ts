import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conventer',
  templateUrl: './conventer.component.html',
  styleUrls: ['./conventer.component.scss'],
})
export class ConventerComponent implements OnInit {
  ammount = 1;
  from = 'PLN';
  to = 'USD';
  rate = 0.21;

  constructor() {}

  ngOnInit(): void {}

  conventer(): number {
    return this.ammount * this.rate;
  }
}
