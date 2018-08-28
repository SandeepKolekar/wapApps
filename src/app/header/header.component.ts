import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service/auth-service.service';
import { HttpService } from '../http/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  currentDate: string;
  userName: string;
  currentRoleName: string;
  getRoleList: any ;
  pageLoader : boolean;
  sendData:object;
  constructor(
    private router: Router,
    private authService: AuthServiceService,
    private HttpService: HttpService
  ) { }

  ngOnInit() {
    this.currentDate = this.authService.getCurrentDate();
    this.userName = this.authService.getUserName();
    this.getRoleList = this.authService.getRoleList();
    this.currentRoleName =  this.getRoleList[0].roleName ;
  }

  logout() {
    this.pageLoader = true ;
    this.sendData = {
      sendData: '',
      url: 'login/logout'
    };

    this.HttpService.post(this.sendData).subscribe(
      res => { 
          this.pageLoader = false ;
          this.authService.removeUserData();
          this.router.navigate(['login']);
      } , 
      error => {
        this.pageLoader = false ;
      }
    ); 
  }
}
