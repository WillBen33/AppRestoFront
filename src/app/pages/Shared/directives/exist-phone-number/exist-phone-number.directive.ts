import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ExistPhoneNumberValidator } from '../../classes/exist-phone-number-validator';

@Directive({
  selector: '[appExistPhoneNumber]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => ExistPhoneNumberDirective),
      multi: true
    }
  ]
})
export class ExistPhoneNumberDirective implements AsyncValidator {

  constructor(private validator: ExistPhoneNumberValidator) { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.validator.validate(control);
  }


}
