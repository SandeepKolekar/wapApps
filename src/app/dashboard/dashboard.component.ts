import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AuthServiceService } from '../auth-service/auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) { }

  ngOnInit() {
   // this.currentState = this.router.routerState.snapshot.url;
  } 

  logout() {
    this.router.navigate(['login']);
  }
}
