import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {

currentDate = '';
pageLoader = false ;

  constructor(
    private router: Router ,
    private HttpService: HttpService
  ) {
  }

  ngOnInit() {
  }

  getDate(zip: string) {
    // this.currentDate = '';
    // this.pageLoader = true ;
    // this.HttpService.getDate().subscribe(
    //   res => {
    //     this.currentDate = JSON.stringify( res);
    //     this.pageLoader = false ;
    //   }
    // );
  }

  updateData() {
    // this.HttpService.postData().subscribe();
  }

}
