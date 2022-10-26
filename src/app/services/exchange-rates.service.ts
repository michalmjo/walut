import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExchangeRatesResponse } from '../interface/exchange-rates-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesService {
  myHeaders = new Headers().append(
    'apikey',
    'htKqFqoX2k88WTmZ1TEfA8uAuW4zMqKa'
  );

  requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: this.myHeaders,
  };

  constructor(private http: HttpClient) {}
  getRates(base: string): Observable<ExchangeRatesResponse> {
    return this.http.get<ExchangeRatesResponse>(
      `https://api.apilayer.com/exchangerates_data/latest?base=${base}, requestOptions `
    );
  }
}
