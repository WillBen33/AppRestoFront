import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { AuthenticationControllerService } from "src/app/api/services";

@Injectable({providedIn:'root'})
export class ExistEmailValidator  implements AsyncValidator{
    constructor(private authenticationService: AuthenticationControllerService) { }
    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        return this.authenticationService.userExistWithEmail({body:control.value})
        .pipe(
            map(isTaken => (isTaken ? {existEmail:true} : null)),
            catchError(()=> of(null))
        )
    }
}
