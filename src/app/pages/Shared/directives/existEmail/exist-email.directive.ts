import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator,  NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { ExistEmailValidator } from '../../classes/exist-email-validator';

@Directive({
  selector: '[appExistEmail]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => ExistEmailDirective),
      multi: true
    }
  ]
})
export class ExistEmailDirective implements AsyncValidator {

  constructor(private emailValidator : ExistEmailValidator) { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.emailValidator.validate(control);
  }

}
