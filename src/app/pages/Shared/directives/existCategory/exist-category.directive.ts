import { Directive, forwardRef } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { ExistCategoryValidator } from '../../classes/exist-category/exist-category-validator';

@Directive({
  selector: '[appExistCategory]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => ExistCategoryDirective),
      multi: true
    }
  ]
})
export class ExistCategoryDirective implements AsyncValidator {

  constructor(private categoryValidator:ExistCategoryValidator) { }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.categoryValidator.validate(control);
  }

}
