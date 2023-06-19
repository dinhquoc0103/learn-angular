import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateUsernameFromApi, validateUsernameFromApiDebounce } from '../validatorFn';
import { RegisterService } from './register.service';

// const PASSWORD_PATTERN = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    username: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ]),
      validateUsernameFromApiDebounce(this.registerService)
    ],
    password: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        // Validators.pattern(PASSWORD_PATTERN)
      ]),
    ],
    confirmPassword: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        // Validators.pattern(PASSWORD_PATTERN)
      ]),
    ],
  });;

  constructor(private fb: FormBuilder, private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  handleSubmitRegister() {
    console.log("submitted");

  }

}
