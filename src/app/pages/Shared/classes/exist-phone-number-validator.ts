import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { AuthenticationControllerService } from "src/app/api/services";

@Injectable({ providedIn: 'root' })
export class ExistPhoneNumberValidator implements AsyncValidator {
    constructor(private authenticationService: AuthenticationControllerService) { }
    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return this.authenticationService.userExistWithPhoneNumber({ body: control.value }).pipe(
            map(isTaken => (isTaken ? { existPhoneNumber: true } : null)),
            catchError(() => of(null))
        )
    }
}
