import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `
    Child
    <a routerLink="..">Click to go to back to home</a>
  `,
})
export class DashboardChildComponent {}
