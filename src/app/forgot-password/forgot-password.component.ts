import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../global/global.service';
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
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  private fg: FormGroup;
  constructor(
    private router: Router ,
    private GlobalService: GlobalService ,
    private fb: FormBuilder
  ) {
    this.fg = fb.group({
      usNm: ['', Validators.compose([
        // tslint:disable-next-line:quotemark
        // tslint:disable-next-line:max-line-length
        // tslint:disable-next-line:quotemark
        Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ])]
    });
  }


  ngOnInit() {
  }
  forgotPassword(){
    alert("ok");
  }

}
