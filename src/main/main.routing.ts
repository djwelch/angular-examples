import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: async () => (await import('../dashboard')).DashboardModule,
        //loadChildren: './dashboard/dashboard.module#DashboardModule',
      },
      {
        path: 'form',
        loadChildren: async () => (await import('../form')).FormModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRouting {}
