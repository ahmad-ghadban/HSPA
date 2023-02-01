import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserForLogin, UserForRegister } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:5015';

constructor(private http: HttpClient) { }

authUser(user: UserForLogin){
  return this.http.post(this.baseUrl + '/api/account/login', user);

 }

 registerUser(user: UserForRegister){
  return this.http.post(this.baseUrl + "/api/account/register", user);
 }

}
