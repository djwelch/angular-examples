import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

interface NameEmail {
  name: String;
  email: String;
}

@Component({
  selector: 'form-reactive',
  template: `
    <form [formGroup]="myForm" (ngSubmit)="submit()" novalidate>
      <label for="name1">Name</label>
      <input id="name1" type="text" formControlName="name" />

      <div *ngIf="name.errors?.required">
        Name is required.
      </div>

      <label for="email1">Email</label>
      <input id="email1" type="email" formControlName="email" />
      <div *ngIf="email.errors?.required">
        Email is required.
      </div>
      <div *ngIf="email.errors?.email">
        Email must be an email address.
      </div>

      <button type="submit">Submit</button>
    </form>
  `,
})
export class FormReactive {
  myForm: FormGroup;

  get name() {
    return this.myForm.get('name');
  }
  get email() {
    return this.myForm.get('email');
  }

  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  submit() {
    if (!this.myForm.valid) alert('Form invalid');
    const result: NameEmail = Object.assign({}, this.myForm.value);
    console.log(result);
  }
}
