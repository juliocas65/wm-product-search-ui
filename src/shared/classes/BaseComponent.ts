import { FormGroup } from '@angular/forms';

export class BaseComponent {

  public form: FormGroup;

  public formName: string;

  constructor() {
  }

  hasError(controlName: string) {
    const control = this.getFormControl(controlName);
    if (control.invalid && control.touched) {
      return { error: true, class: 'is-invalid' };
    } else if (control.valid && control.touched) {
      return { error: false, class: 'is-valid' };
    } else {
      return { error: false, class: '' };
    }
  }

  hasSpecifyError(controlName: string, errorType: string) {
    const control = this.getFormControl(controlName);

    if (control.errors
      && control.errors[errorType]
      && (control.errors[errorType].value === true || control.errors[errorType] === true)
      && control.touched
    ) {
      return { error: true, class: 'is-invalid' };
    } else if (control.valid && control.touched) {
      return { error: false, class: 'is-valid' };
    } else {
      return { error: false, class: '' };
    }
  }

  getFormControl(controlName: string) {
    return this.form.get(controlName);
  }

  setForm(formIn: FormGroup) {
    this.form = formIn;
  }
}
