import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  AsyncValidatorFn,
  ValidatorFn,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormArray,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  private signup: FormGroup;
  constructor(
    private router: Router,
    private signupGroup: FormBuilder
  ) {
    this.signup = signupGroup.group({
      firstName: ['', Validators.compose([
        Validators.required, Validators.pattern("^[a-zA-Z]+$")
      ])],
      middleName: ['', Validators.compose([
        Validators.required, Validators.pattern("^[a-zA-Z]+$")
      ])],
      lastName: ['', Validators.compose([
        Validators.required, Validators.pattern("^[a-zA-Z]+$")
      ])],
      email: ['', Validators.compose([
        Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ])],
      contactNo: ['', Validators.compose([
        Validators.required, Validators.pattern("^[0-9]+$")
      ])],
      gender: ['', Validators.compose([
        Validators.required
      ])],
      dob: ['', Validators.compose([
        Validators.required
      ])],

      password: ['', Validators.compose([Validators.required, this.passwordCheck1, this.passwordCheck2])],
      confirmPassword: ['', Validators.compose([Validators.required, this.confirmPasswordCheck1, this.confirmPasswordCheck2])]
    });
  }


gender = [
  {code: 'm', value: 'Male'},
  {code: 'f', value: 'Female'}
];

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  passwordCheck1: ValidatorFn = (cntrl: AbstractControl): ValidationErrors | null => {
    if (cntrl.value.charAt(0) === '#') {
      return null;
    }
    return { ers: 'Password start from #' };
  }

  passwordCheck2: ValidatorFn = (cntrl: AbstractControl): ValidationErrors | null => {
    if (cntrl.value.length >= 8) {
      return null;
    }
    return { len: 'Password length should be 8' };
  }

  // tslint:disable-next-line:member-ordering
  confirmPasswordCheck1: ValidatorFn = (cntrl: AbstractControl): ValidationErrors | null => {
    if (cntrl.value.charAt(0) === '#') {
      return null;
    }
    return { ers: 'Confirm password start from #' };
  }
  confirmPasswordCheck2: ValidatorFn = (cntrl: AbstractControl): ValidationErrors | null => {
    if (cntrl.value.length >= 8) {
      return null;
    }
    return { len: 'Confirm length should be 8' };
  }

  sendSignUpDetails() {
    console.log(this.signup);
  }
}
