import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { MainModule } from '../main';

@NgModule({
  bootstrap: [AppComponent],
  imports: [CommonModule, BrowserModule, MainModule, AppRouting],
  declarations: [AppComponent],
})
export class AppModule {}
