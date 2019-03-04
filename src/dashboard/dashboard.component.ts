import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `
    <h3>Dashboard</h3>
    <router-outlet></router-outlet>
  `,
})
export class DashboardComponent {}
