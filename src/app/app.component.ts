import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
  <form [formGroup]="formFather">
      Nickname: <input formControlName="nickName"><br>
      Name: <input formControlName="name"><br>
      <app-form-child
              [ageForm]="formFather">
      </app-form-child>
      <button type="submit"
              [disabled]="formFather.invalid">Save
      </button>
  </form>

  <div>
    {{formFather.value | json}}
  </div>
  `,
  styles: []
})
export class AppComponent {
  formFather!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() { this.createForm() }

  createForm() {
    this.formFather = this.fb.group({
      nickName: ['', [Validators.required]],
      name: ['', [Validators.required]]
    });
  }
}
