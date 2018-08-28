import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.less']
})
export class ChatBotComponent implements OnInit {
  chatData = [];
  ngOnInit() {

  }
  constructor(
    private HttpService: HttpService
  ) {
  }

  sendMsg(msg) {
    this.chatData.push( {code : 'user', msg: msg});
    this.chatData.push( {code : 'system', msg: 'Something went wrong , please try agian!!!'});
   // this.HttpService.postData('', 'data').subscribe();

  // this.HttpService.chatBotPostData(msg)
  // .subscribe( result => {console.dir(result); },
  //              error =>   {console.dir(error); } );
  }
}
