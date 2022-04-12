import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  usersUrl = "http://localhost:8000/users";

  constructor(public http: HttpClient) { }

  registerUser(user: User) {
    console.log(user);
    return this.http.post(this.usersUrl, user);
  }

  getAllUsers() {
    return this.http.get(this.usersUrl);
  }

  deleteUser(id: any) {
    console.log(id);
    let deleteUrl = `${this.usersUrl}/${id}`;
    console.log(deleteUrl)
    return this.http.delete(deleteUrl);
  }

}
