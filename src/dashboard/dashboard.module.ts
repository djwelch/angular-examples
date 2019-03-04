import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from './dashboard.routing';
import { DashboardHomeComponent } from './dashboard-home.component';
import { DashboardChildComponent } from './dashboard-child.component';

@NgModule({
  imports: [CommonModule, DashboardRouting],
  declarations: [DashboardComponent, DashboardHomeComponent, DashboardChildComponent],
  exports: [DashboardComponent],
})
export class DashboardModule {}
