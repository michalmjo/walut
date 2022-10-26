import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from '../services/exchange-rates.service';

@Component({
  selector: 'app-conventer',
  templateUrl: './conventer.component.html',
  styleUrls: ['./conventer.component.scss'],
})
export class ConventerComponent implements OnInit {
  amount = 1;
  from = 'PLN';
  to = 'USD';
  rate = 0.21;

  constructor(private currencyService: ExchangeRatesService) {
    this.currencyService
      .getRates(this.from)
      .subscribe((data) => console.log(data));
  }

  ngOnInit(): void {}

  conventer(): number {
    return this.amount * this.rate;
  }
}
