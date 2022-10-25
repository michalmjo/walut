import { Component } from '@angular/core';

import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'walut';
  updates: boolean = false;

  constructor(private update: SwUpdate) {
    update.available.subscribe((e) => {
      // this.updates = true;

      update.activateUpdate().then(() => document.location.reload());
    });
  }
}
