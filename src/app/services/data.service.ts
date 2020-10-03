import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const options = {
  withCredentials: true
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiHost: string = environment.apiHost;

  constructor(private http:HttpClient) { }

  register(username,password,empid,name,email,phone,designation,address) {
    const data = {
      username,password,empid,name,email,phone,designation,address
    }
    return this.http.post(this.apiHost + "employeeregister", data);
    
  }

  login(username, password) {
    const data = {
      username, password
    }
    return this.http.post(this.apiHost +  "login", data, options);
    
  }
  logout(username, authkey) {
    const data ={
      username, authkey
    }
    
    return this.http.post( this.apiHost +  "logout", data, options);
  }
}
