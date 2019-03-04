import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `
    Home
    <a routerLink="child">Click to go to child</a>
  `,
})
export class DashboardHomeComponent {}
