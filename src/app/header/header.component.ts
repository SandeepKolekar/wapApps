import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service/auth-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentDate: string;
  userName: string;
  currentRoleName: string;
  getRoleList: any ;

  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) { }

  ngOnInit() {
    this.currentDate = this.authService.getCurrentDate();
    this.userName = this.authService.getUserName();
    this.getRoleList = this.authService.getRoleList();
    this.currentRoleName =  this.getRoleList[0].roleName ;
  }

  logout() {
    this.authService.removeUserData();
    this.router.navigate(['login']);
  }
}
