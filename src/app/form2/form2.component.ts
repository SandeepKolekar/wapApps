import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  options: FormGroup;
  options1: FormGroup;

  constructor(fb: FormBuilder , fb1: FormBuilder,private router: Router) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
    this.options1 = fb.group({
      'color': 'primary',
      'fontSize': [16, Validators.min(10)],
    });
  }


  ngOnInit() {
  }
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;


  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }


  hide = true;



  getFontSize() {
    return Math.max(10, this.options.value.fontSize);
  }


  closePage(){
    this.router.navigate(['home/dashboard']);
  }
}
