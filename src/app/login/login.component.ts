import { AuthServiceService } from '../auth-service/auth-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http/http.service';
import { AsyncValidatorFn,ValidatorFn,FormBuilder,FormGroup,Validators,AbstractControl,ValidationErrors,FormArray,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  currentDate: string;
  url : string;
  private fg: FormGroup;
  constructor(
    private router: Router ,
    private authService: AuthServiceService ,
    private HttpService: HttpService,
    private fb: FormBuilder
  ) {
    this.fg = fb.group({
      userName: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  doLogin() {
    console.dir(this.fg);
    let roleLists , authtoken , currentDate , userCode , userName , menuJson ;
    this.url = 'login/authenticate';
    const sendData = {
      'userName' :this.fg.value.userName ,
      'password': this.fg.value.password 
    };
    
    this.HttpService.save(sendData).subscribe(
      res => { 
          roleLists = JSON.stringify(res.data.roleList);
          authtoken = res.data.authtoken;
          currentDate = res.data.dateTime;
          userCode = res.data.userCode;
          userName = res.data.userName;
          menuJson = res.data.jsonMenu;
        
          this.authService.setUserData(userName,userCode, authtoken, menuJson, roleLists, currentDate);
          this.router.navigate(['home']);
      } , 
      error => {console.log(error);}
    ); 
  }
}