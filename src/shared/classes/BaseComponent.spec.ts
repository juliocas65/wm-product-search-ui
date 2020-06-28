import { BaseComponent } from './BaseComponent';
import { FormBuilder, Validators } from '@angular/forms';

describe('Shared: BaseComponent', () => {
  let baseComponent: BaseComponent;
  let formBuilder: FormBuilder;

  // tslint:disable-next-line:no-shadowed-variable
  function initForm(baseComponent: BaseComponent, formBuilder: FormBuilder) {
    baseComponent.setForm(formBuilder.group({
      dummyControl: ['', [Validators.required]]
    }));
  }

  beforeEach(() => {
    baseComponent = new BaseComponent();
    formBuilder = new FormBuilder();
    initForm(baseComponent, formBuilder);
  });

  it('should return error true and class is-invalid when form control is invalid and touched', () => {
    baseComponent.getFormControl('dummyControl').markAsTouched();
    expect(baseComponent.hasError('dummyControl')).toEqual({ 'error': true, 'class': 'is-invalid' });
  });

  it('should return error false and class is-valid when form control is valid and touched', () => {
    const formControl = baseComponent.getFormControl('dummyControl');

    formControl.setValue('SoyRequerido');
    formControl.markAsTouched();
    expect(baseComponent.hasError('dummyControl')).toEqual({ 'error': false, 'class': 'is-valid' });
  });

  it('should return error false and class empty value when form control is untouched', () => {
    const formControl = baseComponent.getFormControl('dummyControl');

    formControl.setValue('SoyRequerido');
    expect(baseComponent.hasError('dummyControl')).toEqual({ 'error': false, 'class': '' });
  });

});

