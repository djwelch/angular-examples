import { Component } from '@angular/core';

@Component({
  selector: 'main',
  template: `
    <h2>Main</h2>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/form">Form</a>
    <router-outlet></router-outlet>
  `,
})
export class MainComponent {}
