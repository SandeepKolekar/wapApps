import { AuthServiceService } from '../auth-service/auth-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http/http.service';
import { ForgotPassword } from './forgot-password.component';
import { AsyncValidatorFn,ValidatorFn,FormBuilder,FormGroup,Validators,AbstractControl,ValidationErrors,FormArray,FormControl } from '@angular/forms';
import {MatDialog} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})

export class LoginComponent {
  pageLoader : boolean;
  currentDate: string;
  invalidLogin: boolean;
  url : string;
  private fg: FormGroup;
  public translate: TranslateService;
  constructor(
    private router: Router ,
    private authService: AuthServiceService ,
    private HttpService: HttpService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    translate: TranslateService
  ) {
    this.fg = fb.group({
      userName: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
      translate.setDefaultLang('en');
      translate.use('en');
  }

  langList = [
    {"code":"en","value":"English"},
    {"code":"ma","value":"Marathi"}
  ];
  changeLang(selectedLang){
  }

  usernameChange(){
    this.invalidLogin = false ;
  }

  doLogin() {
    this.pageLoader = true ;
    this.invalidLogin = false ;
    let roleLists , authtoken , currentDate , userCode , userName , menuJson ;
    this.url = 'login/authenticate';
    const sendData = {
      'userName' :this.fg.value.userName ,
      'password': this.fg.value.password 
    };

    this.authService.setUserData("userName","userCode", "authtoken", "menuJson", "roleLists", "currentDate");
    this.router.navigate(['home']);
    /*
    this.HttpService.save(sendData).subscribe(
      res => { 
          this.pageLoader = false ;
          roleLists = JSON.stringify(res.data.roleList);
          authtoken = res.data.authtoken;
          currentDate = res.data.dateTime;
          userCode = res.data.userCode;
          userName = res.data.userName;
          menuJson = res.data.jsonMenu;
          this.authService.setUserData(userName,userCode, authtoken, menuJson, roleLists, currentDate);
         this.router.navigate(['home']);
      } , 
      error => {
        this.pageLoader = false ;
        this.invalidLogin = true;
      }
    ); */
  }

  openDialog(): void {
    this.invalidLogin = false;
    let dialogRef = this.dialog.open(ForgotPassword, {
      height: '300px',
      width: '500px',
      data: { "data":"" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}