import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { ExistProductValidator } from '../../classes/product-validator/exist-product-validator';

@Directive({
  selector: '[appExistProduct]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => ExistProductDirective),
      multi: true
    }
  ]
})
export class ExistProductDirective implements AsyncValidator {

  constructor(private productValidator:ExistProductValidator) { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.productValidator.validate(control);

  }

}
