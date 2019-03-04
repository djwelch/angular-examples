import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRouting } from './form.routing';
import { FormComponent } from './form.component';
import { FormReactive } from './form-reactive.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormRouting],
  declarations: [FormComponent, FormReactive],
})
export class FormModule {}
