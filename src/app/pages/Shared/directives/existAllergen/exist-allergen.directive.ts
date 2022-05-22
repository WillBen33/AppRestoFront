import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { ExistAllergenValidator } from '../../classes/allergen-validator/exist-allergen-validator';

@Directive({
  selector: '[appExistAllergen]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => ExistAllergenDirective),
      multi: true
    }
  ]
})
export class ExistAllergenDirective implements AsyncValidator {

  constructor(private allergenLibelleValidator : ExistAllergenValidator) { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.allergenLibelleValidator.validate(control);
  }

}
