import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRouting } from './main.routing';
import { DashboardModule } from '../dashboard';

@NgModule({
  imports: [CommonModule, MainRouting],
  declarations: [MainComponent],
  exports: [MainComponent],
})
export class MainModule {}
