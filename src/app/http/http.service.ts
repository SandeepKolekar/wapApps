import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams} from '@angular/common/http';
import { AuthServiceService } from '../auth-service/auth-service.service';
@Injectable()
export class HttpService {

  serviceKey : string ;
  url : string;
  auth_token : string;
  roleCode : string;
  userCode : string;
  baseUrl: string;
  
  constructor(
    private http: HttpClient,
    private authService: AuthServiceService
  ) { 
      this.serviceKey = '070b4547-64b1-42cc-8bb2-efe5bbe9e387';
      this.baseUrl =  "https://192.168.11.63:6565/Talentric/";
      this.auth_token = this.authService.getAuthToken();
      this.roleCode = this.authService.getRoleCode();
      this.userCode = this.authService.getUserCode();

      if(! this.auth_token)
      this.auth_token = "";
      if(! this.roleCode)
      this.roleCode = "";
      if(! this.userCode)
      this.userCode = "";
  }

  post(data): Observable<any> {
    this.url =  this.baseUrl  + data.url;
    const httpOptions = {
      headers: new HttpHeaders({
        'auth_token':   this.auth_token ,
        'service_key': this.serviceKey,
        'roleCode':   this.roleCode,
        'userCode':   this.userCode,
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }),
      contentType: 'application/json',
      dataType: 'json'
    };

       return this.http.post( this.url , data.sendData , httpOptions);
  }
  

  get(data): Observable<any> {
    this.url =  this.baseUrl  + data.url;
    const httpOptions = {
      headers: new HttpHeaders({
        'auth_token':   this.auth_token ,
        'service_key': this.serviceKey,
        'roleCode':   this.roleCode,
        'userCode':   this.userCode,
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }),
      contentType: 'application/json',
      dataType: 'json'
    };
       return this.http.post( this.url , httpOptions);
  }

}
