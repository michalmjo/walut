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
  rates!: { [key: string]: number };

  constructor(private currencyService: ExchangeRatesService) {}

  ngOnInit(): void {
    this.loadRates();
  }

  getAllCurrencies(): string[] {
    return Object.keys(this.rates);
  }

  loadRates() {
    this.currencyService
      .getRates(this.from)
      .subscribe((data) => (this.rates = data.rates));
  }

  conventer(): number {
    return this.amount * this.rates[this.to];
  }
}
