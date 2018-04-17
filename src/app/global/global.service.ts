import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class GlobalService {

  currentDate: string;
  token: string;
  private em: EventEmitter<any>;

  constructor() {
    this.currentDate = '' + new Date();
    this.em = new EventEmitter();
  }

  emitDate() {
    this.em.emit({
      dt: this.currentDate
    });
  }

  scribeDate(callback: any) {
    console.log(this.currentDate);
    this.em.subscribe(dt => callback(dt));
  }

  setCurrentDate(date) {
    this.currentDate = date ;
  }

  getCurrentDate() {
    return this.currentDate ;
  }

  setUserData(token) {
    this.token = token ;
  }

  getUserData() {
    return this.token ;
  }

}
