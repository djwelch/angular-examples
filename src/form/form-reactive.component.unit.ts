const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.should();
chai.use(chaiAsPromised);
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormReactive } from './form-reactive.component';

describe('FormReactiveComponent', () => {
  let fixture: ComponentFixture<FormReactive>, component: FormReactive;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FormReactive],
    });
    fixture = TestBed.createComponent(FormReactive);
    component = fixture.componentInstance;
    fixture.detectChanges();
    console.log(component);
  });

  it('should create', () => {
    component.should.not.be.undefined;
  });
});
