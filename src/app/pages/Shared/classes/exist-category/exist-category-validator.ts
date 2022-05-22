import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { CategoryControllerService } from "src/app/api/services";


@Injectable({ providedIn: 'root' })
export class ExistCategoryValidator implements AsyncValidator {
    constructor(private categoryService: CategoryControllerService) { }
    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return this.categoryService.categoryExistWithName({name:control.value}).pipe(
            map(isTaken => (isTaken ? { existCategory: true } : null)),
            catchError(() => of(null))
        )
    }
}
