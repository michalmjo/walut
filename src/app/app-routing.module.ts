import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConventerComponent } from './conventer/conventer.component';
import { CurrencyComponent } from './currency/currency.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'conventer', component: ConventerComponent },
  { path: 'currency', component: CurrencyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
