import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { AllergenControllerService } from "src/app/api/services";

@Injectable({providedIn:'root'})
export class ExistAllergenValidator {
    constructor(private allergenService: AllergenControllerService) { }
    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return this.allergenService.allergenExistWithLibelle({libelle:control.value})
        .pipe(
            map(isTaken => (isTaken ? {existAllergen:true} : null)),
            catchError(()=> of(null))
        )
    }
}
