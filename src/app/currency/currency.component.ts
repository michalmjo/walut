import { Component, OnInit, Pipe } from '@angular/core';
import { map, tap } from 'rxjs';
import { Currency } from '../interface/currency';
import { ExchangeRatesService } from '../services/exchange-rates.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  loadingCurency: any = [];
  loadingCurency$: any;
  base: string = 'PLN';

  rates!: { [key: string]: number };
  constructor(private currency: ExchangeRatesService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.loadingCurency$ = this.currency
      .getRates(this.base)
      // .subscribe((data) => {
      //   this.loadingCurency = Object.keys(data).map((key) => ({
      //     type: key,
      //     value: data.rates[key],
      //   }));
      //   console.log(this.loadingCurency);
      // });
      .pipe(tap(console.log))
      .subscribe((data) => (this.loadingCurency = data));
  }
}
