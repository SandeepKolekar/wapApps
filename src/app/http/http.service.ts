import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getData(zipCode): Observable<ArrayBuffer> {
    return this.http.get(`https://digital-shelter-153912.firebaseio.com/morning.json`).catch(this.errHndlr);
  }
 
  save(data): Observable<any> {
    const serviceKey = '070b4547-64b1-42cc-8bb2-efe5bbe9e387';
    const  url =  "https://192.168.11.49:6565/Talentric/login/authenticate";

    const httpOptions = {
      headers: new HttpHeaders({
        'auth_token': '',
        'service_key': serviceKey,
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }),
      contentType: 'application/json',
      dataType: 'json'
    };
       return this.http.post( url , data , httpOptions);
  }





  chatBotPostData(msg: any): Observable<any> {
    const accessToken = '6bc535e289014f2c87bb3a1ff6b0081f';
    const baseUrl = 'https://api.api.ai/v1/query?v=20150910';
    const sendData = {
      'query' : msg ,
      'lang': 'en',
      'sessionId': 'somerandomthing',
      'contexts': ['contractor']
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer' + accessToken
      }),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json'
    };

    // const params = new HttpParams().set('ID', '134');
    const headers = new HttpHeaders().set('content-type', 'application/json');
        return this.http.post(baseUrl, sendData , httpOptions);
  }

  errHndlr(err) {
    return Observable.throw('Error in Http');
  }

}
