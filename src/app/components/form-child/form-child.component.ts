import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-child',
  template: `
  <div [formGroup]="ageForm">
      Age: <input formControlName="age">
  </div>
  `,
  styles: [
  ]
})
export class FormChildComponent {
  @Input() ageForm: any = FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() { this.createForm() }

  createForm() {
    this.ageForm.addControl("age", new FormControl('', Validators.required));
  }
}
