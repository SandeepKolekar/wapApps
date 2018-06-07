import { Component, OnInit , Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
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
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPassword implements OnInit {
  private forgotPassword: FormGroup;
  pageLoader : any ;
  ngOnInit() {
  }
  constructor(
    public dialogRef: MatDialogRef<ForgotPassword>,
    @Inject(MAT_DIALOG_DATA) public data: any  , private router: Router ,
    private GlobalService: GlobalService ,
    private fb: FormBuilder) { 
      this.forgotPassword = fb.group({
        email: ['', Validators.compose([
          Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ])]
      });
    }
  
    forgotPasswordEvent(){
      this.pageLoader = true;
    }
    

    routeLink(link){
      this.router.navigate([link]);
      this.dialogRef.close();
    }

    closePage(){
      this.dialogRef.close();
    }
  

  onNoClick(): void {
    this.dialogRef.close();
  }
}
