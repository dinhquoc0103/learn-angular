import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable, timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { RegisterService } from "./register/register.service";

export function validateUsernameFromApi(registerService: RegisterService) {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        const value = control.value;
        return registerService.checkExistUsername(value).pipe(
            map((isValid: boolean) => {
                return isValid ? null : { usernameDuplicated: true }
            })
        );
    }
}


export function validateUsernameFromApiDebounce(registerService: RegisterService) {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        return timer(1000).pipe(
            switchMap(() => {
                const value = control.value;
                return registerService.checkExistUsername(value).pipe(
                    map((isValid: boolean) => {
                        return isValid ? null : { usernameDuplicated: true }
                    })
                );
            })
        );
    }
}