import { Injectable } from '@angular/core';

@Injectable()
export class AuthServiceService {
  constructor() { }
  setUserData(userName,userCode, authToken, menuJson, roleLists, currentDate) {
    sessionStorage.userName = userName;
    sessionStorage.userCode = userCode;
    sessionStorage.currentDate = currentDate;
    sessionStorage.authToken = authToken;
    localStorage.menuJson = menuJson;
    localStorage.roleLists = roleLists;
  }

  getUserName(){
    return  sessionStorage.userName ;
  }
  getUserCode(){
    return  sessionStorage.userCode ;
  }
  getAuthToken(){
    return  sessionStorage.authToken ;
  }
  getCurrentDate(){
    return  sessionStorage.currentDate ;
  }
  getMenuJson(){
    return  localStorage.menuJson ;
  }
  getRoleList(){
    return  JSON.parse( localStorage.roleLists);
  }
  setRoleCode(roleCode){
    sessionStorage.roleCode = roleCode;
  }
  getRoleCode(){
    return  sessionStorage.roleCode ;
  }

  removeUserData(){
    localStorage.clear();
    sessionStorage.clear();
    sessionStorage.userName = "";
    sessionStorage.userCode = "";
    sessionStorage.currentDate = "";
    sessionStorage.authToken = "";
    localStorage.menuJson = "";
    localStorage.roleLists = "";
  }
}
