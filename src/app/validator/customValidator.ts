import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function isNumericValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let value = control.value;
        const isNumeric = Number.isInteger(Number(value));
        console.log(isNumeric);

        return isNumeric || value === '' ? null : { isNumeric: true };
    }
}