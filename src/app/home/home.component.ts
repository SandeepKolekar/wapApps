
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { AuthServiceService } from '../auth-service/auth-service.service';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
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
