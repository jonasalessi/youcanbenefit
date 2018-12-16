import { Component } from '@angular/core';

@Component({
  template:
  `
    <mat-card class="col-10 flex flex-column overview-wrapper">
      <router-outlet></router-outlet>
    </mat-card>
  `,
  styles: [`
    mat-card {
      height: 60vh;
      overflow-x: hidden;
      overflow-y: scroll;
      font-family: 'Open Sans', sans-serif;
      margin: 0 auto;
    }
  `]
})
export class KeysComponent {}
