import { Injectable } from "@angular/core"
import { AsyncValidator, AbstractControl, ValidationErrors } from "@angular/forms"
import { Observable, of } from "rxjs"
import { map, catchError } from "rxjs/operators"
import { ProductControllerService } from "src/app/api/services"

@Injectable({ providedIn: 'root' })
export class ExistProductValidator implements AsyncValidator {
    constructor(private productService: ProductControllerService) { }
    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return this.productService.productExistWithLibelle({ libelle: control.value }).pipe(
            map(isTaken => (isTaken ? { existProduct: true } : null)),
            catchError(() => of(null))
        )
    }
}
